import React, { Component } from 'react';

import DeckList from './deckList.js'
import ManaInput from './manaInput.js'

class DeckGenerator extends Component {
  constructor() {
    super();
    this.state = {
      spellArray: []
    };
  }

  _addNewSpellToDeck = (newManaCost) => {
    let newSpell = this._createNewSpell(newManaCost);
    let newSpellArray = this.state.spellArray.slice();
    let newSpellIndex = newSpellArray.findIndex(this._isNewSpellIndex, newSpell);
    if (newSpellIndex === -1) {
      //if no spell was found for which the new one should be inserted right before it, then it belongs at the end
      newSpellArray.push(newSpell);
    }
    else {
      newSpellArray.splice(newSpellIndex, 0, newSpell);
    }
    this.setState({
      spellArray: newSpellArray
    });
  };

  _cardCountChanged = (newCount, index) => {
    let newSpellArray = this.state.spellArray.slice();
    newSpellArray[index] = {...this.state.spellArray[index], count: newCount};
    this.setState({
      spellArray: newSpellArray
    });
  };

  _createNewSpell = (newManaCost) => {
    let w = 0,
      u = 0,
      b = 0,
      r = 0,
      g = 0,
      generic = 0,
      colors = 0,
      count = 0;
    newManaCost.forEach(function(symbol) {
      switch (symbol) {
        case 'w':
          w++;
          break;
        case 'u':
          u++;
          break;
        case 'b':
          b++;
          break;
        case 'r':
          r++;
          break;
        case 'g':
          g++;
          break;
        default:
          let tryGeneric = parseInt(symbol, 10);
          if (!isNaN(tryGeneric)) {
            generic = tryGeneric;
          }
      }
    });
    if (w > 0) {
      colors++;
    }
    if (u > 0) {
      colors++;
    }
    if (b > 0) {
      colors++;
    }
    if (r > 0) {
      colors++;
    }
    if (g > 0) {
      colors++;
    }
    let cmc = w + u + b + r + g + generic;
    return {
      manaCost: newManaCost,
      cmc: cmc,
      colors: colors,
      count: count,
      w: w,
      u: u,
      b: b,
      r: r,
      g: g
    };
  };

  _isNewSpellIndex = function(element) {
    if (this.cmc < element.cmc) {
      return true;
    }
    else if (this.cmc === element.cmc) {
      if (this.colors < element.colors) {
        return true;
      }
      else if (this.colors === element.colors) {
        if (this.g < element.g) {
          return true;
        }
        else if (this.g === element.g) {
          if (this.r < element.r) {
            return true;
          }
          else if (this.r === element.r) {
            if (this.b < element.b) {
              return true;
            }
            else if (this.b === element.b) {
              if (this.u < element.u) {
                return true;
              }
              else if (this.u === element.u) {
                if (this.w < element.w) {
                  return true;
                }
              }
            }
          }
        }
      }
    }
  };

  //Not in use
  //Is this a more readable refactor of _isNewSpellIndex?
  _isNewSpellIndex2 = function(element) {
    if (this.cmc > element.cmc) {
      return false;
    }
    if (this.cmc < element.cmc) {
      return true;
    }
    if (this.colors > element.colors) {
      return false;
    }
    if (this.colors < element.colors) {
      return true;
    }
    if (this.g > element.g) {
      return false;
    }
    if (this.g < element.g) {
      return true;
    }
    if (this.r > element.r) {
      return false;
    }
    if (this.r < element.r) {
      return true;
    }
    if (this.b > element.b) {
      return false;
    }
    if (this.b < element.b) {
      return true;
    }
    if (this.u > element.u) {
      return false;
    }
    if (this.u < element.u) {
      return true;
    }
    if (this.w > element.w) {
      return false;
    }
    if (this.w < element.w) {
      return true;
    }
  };

  _removeSpellFromDeck = (index) => {
    let newSpellArray = this.state.spellArray.slice();
    newSpellArray.splice(index, 1);
    this.setState({
      spellArray: newSpellArray
    });
  };

  render() {
    let deckList;
    if (this.state.spellArray.length > 0) {
      deckList = (
        <div className='container'>
          <DeckList spellList={this.state.spellArray}
                    countChanged={this._cardCountChanged}
                    removeFromDeck={this._removeSpellFromDeck} />
        </div>
      );
    }
    return (
      <div>
        <div className='container'>
          <ManaInput ref='primaryManaInput'
                     addToDeck={this._addNewSpellToDeck} />
        </div>
        {deckList}
      </div>
    )
  }
}

export default DeckGenerator;
