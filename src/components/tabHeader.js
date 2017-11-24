import React, {Component} from 'react';

class TabHeader extends Component {

  _handleTabClick = () => {
    this.props.clickHandler(this.props.handlerParams);
  };

  render() {
    return (
      <header className={this.props.headerClass}
              onClick={this._handleTabClick} >
        <h1 className={this.props.titleClass}>
          {this.props.title}
        </h1>
      </header>
    )
  }
}

export default TabHeader;
