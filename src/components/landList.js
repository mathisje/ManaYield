import React, {Component} from 'react';

import CardCount from './cardCount.js';

class LandList extends Component {

  _mapLandToDisplay = (land, index) => {
    return (
      <div key={index}
           className='card-row' >
        <CardCount controlledValue={land.count}
                   changeHandler={this.props.countChanged}
                   handlerParams={index} />
        <div className="land-label">
          {land.type}
        </div>
      </div>
    )
  };

  render() {
    return (
      <div className='deck-list'>
        {this.props.landList.map(this._mapLandToDisplay)}
      </div>
    )
  }
}

export default LandList;
