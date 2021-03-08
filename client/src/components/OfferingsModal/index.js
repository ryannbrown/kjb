import { Container, Nav, Button, Image, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomeHero from "../../components/HomeHero/index"
import './style.css';
import moons from '../../media/bluemoons.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons'



export default class OfferingsModal extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "top",
            showModal: this.props.showModal,
            chosenOffering: this.props.chosenOffering,
            worksObject: this.props.worksObject
        };
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        console.log("in modal", this.props.chosenOffering)
    }

    render() {

        const { worksObject, chosenOffering } = this.props;
        const prevModal = worksObject[chosenOffering - 1]
        const thisModal = worksObject[chosenOffering];
        const nextModal = worksObject[chosenOffering + 1]
        
        console.log(thisModal)

        console.log(worksObject.length)


        return (

            <div className="offerings-modal">
                {prevModal ? (
                    <div className="prev-modal">
                        <div className="prev-modal-box">
                            <Image className="off-image" src={prevModal.image} />
                            <h1 className="primaryTextColor rob">{prevModal.title}</h1>
                            <hr style={{ width: `50%` }}></hr>
                            <p className="modal-description">{prevModal.description}
                            </p>
                            <button className="main-btn" style={{ margin: `15px` }} variant="basic">Book for ${prevModal.price}</button>
                            <a><p className="primaryTextColor">Learn More</p></a>
                        </div>
                    </div>
                ): (<div></div>)}

                <FontAwesomeIcon className="exit-btn" icon={faTimes} onClick={this.props.closeModal}></FontAwesomeIcon>
                {/* CURRENT MODAL */}
                <div className="modal-box">
                    <Image className="off-image" src={thisModal.image} />
                    <h1 className="primaryTextColor rob">{thisModal.title}</h1>
                    <hr style={{ width: `50%` }}></hr>
                    <p className="modal-description">{thisModal.description}
                    </p>
                    <a target="_blank" href={thisModal.link}><button className="main-btn" style={{ margin: `15px` }} variant="basic">Book for ${thisModal.price}</button></a>
                    <a href={`/services/${this.props.chosenOffering}`}><p className="primaryTextColor">Learn More</p></a>
                </div>
                {nextModal ? (
                    <div className="next-modal">
                        <div className="next-modal-box">
                            <Image className="off-image" src={nextModal.image} />
                            <h1 className="primaryTextColor rob">{nextModal.title}</h1>
                            <hr style={{ width: `50%` }}></hr>
                            <p className="modal-description">{nextModal.description}
                            </p>
                            <button className="main-btn" style={{ margin: `15px` }} variant="basic">Book for ${nextModal.price}</button>
                            <a><p className="primaryTextColor">Learn More</p></a>
                        </div>
                    </div>
                ): (<div></div>)}
                {chosenOffering > 0 ? (
                    <FontAwesomeIcon onClick={() => this.props.decOffering(chosenOffering)} className="arrow-left" icon={faArrowLeft}></FontAwesomeIcon>
                ) : (<div></div>)}
                {chosenOffering == worksObject.length - 1 ? (
                    <div></div>
                ) : (
                        <FontAwesomeIcon onClick={() => this.props.incOffering(chosenOffering)} className="arrow-right" icon={faArrowRight}></FontAwesomeIcon>
                    )}

            </div>
        )

    }
}