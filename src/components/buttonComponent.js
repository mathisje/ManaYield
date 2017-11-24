import React, {Component} from 'react';

class ButtonComponent extends Component {

  _handleOnClick = () => {
    this.props.clickHandler(this.props.handlerParams);
  };

  render() {
    return (
      <button className={this.props.buttonClass}
              onClick={this._handleOnClick} >
        {this.props.buttonIcon}
        {this.props.buttonText}
      </button>
    )
  }
}

export default ButtonComponent;
