import React, {Component} from 'react';

class TabHeader extends Component {

  handleClick = () => {
    this.props.clickHandler(this.props.handlerParams);
  };

  render() {
    return (
      <header className={this.props.headerClass}
              onClick={this.handleClick} >
        <h1 className={this.props.titleClass}>
          {this.props.headerTitle}
        </h1>
      </header>
    )
  }
}

export default TabHeader;
