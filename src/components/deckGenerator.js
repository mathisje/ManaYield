import React, { Component } from 'react';

import DeckList from './deckList.js'
import ManaInput from './manaInput.js'
import LandList from "./landList";
import ButtonComponent from "./buttonComponent";

class DeckGenerator extends Component {
  constructor() {
    super();
    this.state = {
      landList: [
        {
          type: "Plains",
          count: 0
        },
        {
          type: "Island",
          count: 0
        },
        {
          type: "Swamp",
          count: 0
        },
        {
          type: "Mountain",
          count: 0
        },
        {
          type: "Forest",
          count: 0
        }
      ],
      spellList: []
    };
  }

  _addNewSpellToDeck = (newManaCost) => {
    let newSpell = this._createNewSpell(newManaCost);
    let newSpellList = this.state.spellList.slice();
    let newSpellIndex = newSpellList.findIndex(this._isNewSpellIndex, newSpell);
    if (newSpellIndex === -1) {
      //if no spell was found for which the new one should be inserted right before it, then it belongs at the end
      newSpellList.push(newSpell);
    }
    else {
      newSpellList.splice(newSpellIndex, 0, newSpell);
    }
    this.setState({
      spellList: newSpellList
    });
  };

  _calculateManaEfficiency = () => {
    let myHeaders = new Headers({
      'Content-Type': 'application/json'
    });

    let myInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(this.state.landList.concat(this.state.spellList))
    };

    fetch('/calculate', myInit)
      .then(this._calculateRequestHandler)
      .then(this._calculateResponseHandler);
  };

  _calculateRequestHandler = (response) => {
    return response.json();
  };

  _calculateResponseHandler = (response) => {
    console.log(response);
  };

  _landCountChanged = (newCount, index) => {
    let newLandList = this.state.landList.slice();
    newLandList[index] = {...this.state.landList[index], count: newCount};
    console.log(newLandList);
    this.setState({
      landList: newLandList
    });
  };

  _spellCountChanged = (newCount, index) => {
    let newSpellList = this.state.spellList.slice();
    newSpellList[index] = {...this.state.spellList[index], count: newCount};
    console.log(newSpellList);
    this.setState({
      spellList: newSpellList
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
    let newSpellList = this.state.spellList.slice();
    newSpellList.splice(index, 1);
    this.setState({
      spellList: newSpellList
    });
  };

  render() {
    let deckList;
    if (this.state.spellList.length > 0) {
      deckList = (
        <div className='container'>
          <DeckList spellList={this.state.spellList}
                    countChanged={this._spellCountChanged}
                    removeFromDeck={this._removeSpellFromDeck} />
        </div>
      );
    }
    return (
      <div>
        <ButtonComponent buttonClass='text-button'
                         buttonText='calculate'
                         clickHandler={this._calculateManaEfficiency} />
        <div className='container'>
          <ManaInput ref='primaryManaInput'
                     addToDeck={this._addNewSpellToDeck} />
        </div>
        <div className='container'>
          <LandList landList={this.state.landList}
                    countChanged={this._landCountChanged} />
        </div>
        {deckList}
      </div>
    )
  }
}

export default DeckGenerator;
