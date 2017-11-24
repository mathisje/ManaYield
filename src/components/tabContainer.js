import React, {Component} from 'react';

import TabHeader from "./tabHeader";

class TabContainer extends Component {
  constructor() {
    super();
    this.state = {
      tabArray: [],
      contentArray: [],
      selectedIndex: 0
    };
  }

  _mapTabToContent = (tab) => {
    return tab.content;
  };

  _mapTabToDisplay = (tab, index) => {
    let className = this.props.headerClass;
    if (this.state.selectedIndex === index) {
      className = this.props.selectedHeaderClass
    }
    return (
      <div key={index}>
        <TabHeader {...this.props}
                   title={tab.title}
                   headerClass={className}
                   clickHandler={this._switchToTab}
                   handlerParams={index} />
      </div>
    )
  };

  _switchToTab = (index) => {
    this.setState({
      selectedIndex: index
    });
  };

  componentWillMount() {
    console.log(this.props);
    let tabArray = this.props.tabList();
    let contentArray  = tabArray.map(this._mapTabToContent);
    this.setState({
      tabArray: tabArray,
      contentArray: contentArray,
      selectedIndex: this.props.defaultIndex
    });
  }

  render() {
    return (
      <div className={this.props.containerClass}>
        <div className={this.props.tabRowClass}>
          {this.state.tabArray.map(this._mapTabToDisplay)}
          {this.props.emptySpaceRight}
        </div>
        <div className={this.props.contentContainerClass}>
          {this.state.contentArray[this.state.selectedIndex]}
        </div>
      </div>
    )
  }
}

export default TabContainer;
