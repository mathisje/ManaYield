import React, {Component} from 'react';

import CardCount from './cardCount.js';

class LandList extends Component {

  mapLandsToDisplay = (land) => {
    return (
      <div key={land.id}
           className='card-row' >
        <CardCount controlledValue={land.count}
                   changeHandler={this.props.changeCountHandler}
                   handlerParams={land.id} />
        <div className="land-label">
          {land.id}
        </div>
      </div>
    )
  };

  render() {
    return (
      <div className='container'>
        <div className='deck-list'>
          {this.props.lands.map(this.mapLandsToDisplay)}
        </div>
      </div>
    )
  }
}

export default LandList;
