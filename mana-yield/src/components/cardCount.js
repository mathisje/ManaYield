import React, {Component} from 'react';

class CardCount extends Component {
  constructor() {
    super();
    this.state = {
      renderFlag: false
    };
  }

  //this component is knowingly overengineered and is a candidate for refactor. More in the readme

  _handleOnChange = (e) => {
    let newCount = parseInt(e.target.value, 10);
    newCount = !isNaN(newCount) ? newCount : 0;

    if (newCount > -1 && newCount < 100) {
      this.props.handleChange(newCount, this.props.index);
    }
  };

  _handleOnInput = (e) => {
    if (e.target.value === '' && !this.props.inputValue) {
      this.setState({renderFlag: !this.state.renderFlag});
    }
  };

  _handleKeyPress = (e) => {
    if (e.key === 'e' || e.key === '-' || e.key === '+' || e.key === '.') {
      e.preventDefault();
    }
  };

  render() {
    let keyValue = this.props.index + '' + this.state.renderFlag;
    let displayValue = this.props.inputValue > 0 ? this.props.inputValue : '';

    return (
      <input key={keyValue}
             className='card-count'
             type='number'
             min='0'
             max='99'
             onChange={this._handleOnChange}
             onInput={this._handleOnInput}
             onKeyPress={this._handleKeyPress}
             value={displayValue} />
    )
  }
}

export default CardCount;
