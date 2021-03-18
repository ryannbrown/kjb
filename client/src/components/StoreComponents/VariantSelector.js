import React, {Component} from 'react';
// import Select from 'react-select'

class VariantSelector extends Component {
  render() {
    // let props= this.props
    return (
      <select
        className="Product__option"
        name={this.props.option.name}
        key={this.props.option.name}
        onChange={this.props.handleOptionChange}
      >
        {this.props.option.values.map((value) => {
          return (
            <option value={value} key={`${this.props.option.name}-${value}`}>{`${value}`}</option>
          )
        })}
      </select>
    );
  }
}

export default VariantSelector;
