import React, {Component} from 'react';
import './../css/app.css';
import './../css/mana.css';

import ButtonComponent from "./buttonComponent";
import CardCount from './cardCount.js';
import ManaCost from './manaCost.js';

class DeckList extends Component {

  _handleRemoveClick = (spellIndex) => {
    this.props.removeFromDeck(spellIndex)
  };

  _mapSpellToDisplay = (spell, index) => {
    return (
      <div key={index}
           className='card-row' >
        <ButtonComponent buttonClass='add-remove-button'
                         buttonIcon='-'
                         clickHandler={this._handleRemoveClick}
                         handlerParams={index} />
        <CardCount controlledValue={spell.count}
                   changeHandler={this.props.countChanged}
                   handlerParams={index} />
        <ManaCost costArray={spell.manaCost} />
      </div>
    )
  };

  render() {
    return (
      <div className='deck-list'>
        {this.props.spellList.map(this._mapSpellToDisplay)}
      </div>
    )
  }
}

export default DeckList;
