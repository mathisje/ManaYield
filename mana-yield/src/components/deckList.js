import React, {Component} from 'react';
import './../css/app.css';
import './../css/mana.css';

import CardCount from './cardCount.js';
import ManaCost from './manaCost.js';

class DeckList extends Component {
  constructor() {
    super();
    this.state = {
      spells: [],
      lands: [],
      deck: []
    };
  }

  _countChanged = (x) => {
    //console.log(x);
  };

  render() {
    return (
      <div className='deck-list'>
        {
          this.props.spellList.map((spell, index) => {
            return (
              <div key={index}
                   className='card-row' >
                <button className='add-remove-button'
                        onClick={() => this.props.removeFromDeck(index)} >
                  -
                </button>
                <CardCount defaultValue={spell.count}
                           handleChange={(e) => this.props.countChanged(e.target.value, index)} />
                <ManaCost costArray={spell.manaCost} />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default DeckList;
