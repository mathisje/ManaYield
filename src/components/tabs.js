import React, {Component} from 'react';

import TabHeader from "./tabHeader";

class TabContainer extends Component {

  mapTabsToHeaders = (tab, index) => {
    let headerClass = this.props.tabStyles.headerClass;
    if (this.props.tabIndex === index) {
      headerClass = this.props.tabStyles.selectedHeaderClass
    }
    return (
      <div key={index}>
        <TabHeader clickHandler={this.props.switchTabHandler}
                   handlerParams={index}
                   headerClass={headerClass}
                   headerTitle={tab.title}
                   titleClass={this.props.tabStyles.titleClass} />
      </div>
    )
  };

  render() {
    return (
      <div className={this.props.tabStyles.containerClass}>
        <div className={this.props.tabStyles.headerContainerClass}>
          {this.props.tabArray.map(this.mapTabsToHeaders)}
          <div className={this.props.tabStyles.emptyClass} />
        </div>
        <div className={this.props.tabStyles.contentContainerClass}>
          {this.props.tabArray[this.props.tabIndex].content}
        </div>
      </div>
    )
  }
}

export default TabContainer;
