

    const express = require('express');
    const bodyParser = require('body-parser');
    var Client = require('ftp');
    var fs = require('fs');
    const helmet = require("helmet");
    
    const app = express();
    const port = process.env.PORT || 5000;
    
    
    const morgan = require('morgan');
    const router = require("express").Router();
    const path = require("path");
    
    // aws bucket
    const AWS = require('aws-sdk');
    require('dotenv').config();
    const Busboy = require('busboy');
    const busboy = require('connect-busboy');
    const busboyBodyParser = require('busboy-body-parser')
    const cors = require('cors')
    app.use(cors());
    
    app.use(morgan('dev'));
    
    app.use(busboy())
    app.use(busboyBodyParser())
    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    
    
    var pg = require('pg');
    
    var knex = require("knex")({
      client: "pg",
      connection: process.env.CONNSTRING,
      searchPath: ["knex", "public"],
    });
    

    app.get("/api/posts", cors(), function (req, response) {
      knex.select()
        .from("blog_posts")
        .returning("*").orderBy('date', 'desc')
        .then((data) => {
          response.send(JSON.stringify({ data }));
        });
    });
app.get("/api/posts/:id", cors(), function (req, response) {
      const { id } = req.params;
      knex
        .select()
        .from("blog_posts")
        .returning("*").where('id', id)
        .then((data) => {
          response.send(JSON.stringify({ data }));
        });
    });
    
    
    app.post("/api/post", function (req, res) {
      const { title, date, body, image } = req.body;
      knex("blog_posts")
        .insert({
          date: date,
          title: title,
          body: body,
          image: image
          // order:
        })
        .then(res.send("POST request to the homepage"));
    
      // posts.push(data)
    });
    


    app.post("/api/update", function (req, res) {
      const { id, title, body } = req.body;
      knex("blog_posts")
        .where("id", id)
        .update({
          title: title,
          body: body,
        })
        .then(res.send("POST request to the homepage"));
    
      // posts.push(data)
    });
    


    app.delete("/api/remove_post", function (req, response) {
      // console.log("hiiiii")
      const id = req.body.id;
      // console.log(id)
      console.log(id);
      knex("blog_posts").where("id", id).del().then(response.send("deleted item"));
    });
    
    
    
    
    const BUCKET_NAME = process.env.NAME;
    const ACCESS = process.env.ACCESS
    const SECRET = process.env.SECRET
    
    // TODO: be able to remove pictures from S3 programmatically? 
    function uploadToS3(file) {
      let s3bucket = new AWS.S3({
        accessKeyId: ACCESS,
        secretAccessKey: SECRET,
        Bucket: BUCKET_NAME
      });
      s3bucket.createBucket(function () {
        var params = {
          Bucket: BUCKET_NAME,
          Key: file.name,
          Body: file.data
        };
        s3bucket.upload(params, function (err, data) {
          if (err) {
            console.log('error in callback');
            console.log(err);
          }
          console.log('success');
          console.log(data);
        });
      });
    }
    
    app.post('/api/upload', function (req, res, next) {
    
      console.log("body", req.body)
      // console.log("req", req)
      const element1 = req.body.element1;
      console.log(element1)
      var busboy = new Busboy({ headers: req.headers });
    
      // The file upload has completed
      busboy.on('finish', function () {
        console.log('Upload finished');
        console.log("files", req.files)
        const file = req.files.element1;
        console.log(file);
    
        uploadToS3(file);
      });
    
      req.pipe(busboy);
    });
    

 
    //    POST CUSTOM INVENTORY
    app.post('/api/lead-form', function (req, res) {
      console.log("keys")
      const { name, email, selection, message} = req.body;
      knex("leads").insert({
        name: name,
        email: email,
        selection: selection,
        message: message
      })
      .then(res.send("lead added"))
      .catch(err => res.status(400).json('unable to add lead form'))
    })

    app.get('/api/leads', cors(), function (req, response) {
      knex.select().from("leads")
      .returning('*').orderBy('id')
      .then((data) => {
        response.send(JSON.stringify({data}))
      })
    })
    
    app.get('/api/leads/:id', cors(), function (req, response) {
      const {id} = req.body;
      knex.select().from("leads")
      .returning('*').orderBy('id').where('id', id)
      .then((data) => {
        response.send(JSON.stringify({data}))
      })
    })

  //    DELETE CUSTOM INVENTORY
  app.delete('/api/remove_lead', function (req, response) {
     const id = req.body.id;
     console.log(id);
     knex("leads").where("id", id).del().then(response.send("deleted item"));
  })
    

    
 
      if (process.env.NODE_ENV === 'production') {
        app.use(helmet({
          contentSecurityPolicy: false,
        }));

        // Serve any static files
        app.use(express.static(path.join(__dirname, 'client/build')));
    
        // Handle React routing, return all requests to React app
        app.get('*', function (req, res) {
          res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
        });
      }
    
    
      app.listen(port, () => console.log(`Listening on port ${port}`));
    // console.log('Application running!' + cluster.worker.id);
    // }