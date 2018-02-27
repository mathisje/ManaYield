import React, {Component} from 'react';

import ButtonComponent from "./buttonComponent";
import CardCount from './cardCount.js';
import ManaCost from './manaCost.js';

class SpellList extends Component {

  mapSpellsToDisplay = (spell) => {
    return (
      <div key={spell.id}
           className='card-row' >
        <ButtonComponent buttonClass='add-remove-button'
                         buttonIcon='-'
                         clickHandler={this.props.removeSpellHandler}
                         handlerParams={spell.id} />
        <CardCount controlledValue={spell.count}
                   changeHandler={this.props.changeCountHandler}
                   handlerParams={spell.id} />
        <ManaCost costArray={spell.manaCost} />
      </div>
    )
  };

  render() {
    let body = null;
    if (this.props.spells.length > 0) {
      body = (
        <div className='container'>
          <div className='deck-list'>
            {this.props.spells.map(this.mapSpellsToDisplay)}
          </div>
        </div>
      )
    }
    return body;
  }
}

export default SpellList;
