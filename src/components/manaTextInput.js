import React, {Component} from 'react';

class ManaTextInput extends Component {

  _handleOnChange = (e) => {
    this.props.handleChange(e.target.value.toLowerCase().split(''));
  };

  render() {
    return (
      <input type='text'
             value={this.props.controlledValue}
             onChange={this._handleOnChange}
             className='text-input'
             autoComplete="off"
             autoCorrect="off"
             autoCapitalize="off"
             spellCheck="false" />
    )
  }
}

export default ManaTextInput;
