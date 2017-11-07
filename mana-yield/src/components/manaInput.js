import React, {Component} from 'react';
import './../css/app.css';
import './../css/mana.css';

import ManaCost from './manaCost.js';

class ManaInput extends Component {
  constructor() {
    super();
    this.state = {
      manaArray: [],
      typeSequenceArray: [],
      value: ''
    };
  }

  _colorOrder = (symbol) => {
    switch (symbol) {
      case 'w':
        return 1;
      case 'u':
        return 2;
      case 'b':
        return 3;
      case 'r':
        return 4;
      case 'g':
        return 5;
      default:
        return 0;
    }
  };

  _appendGenericSymbol = (symbol, genericString) => {
    console.log('generic');
    let newGenericString = genericString + symbol;
    let newGenericTotal = parseInt(newGenericString, 10);
    if (newGenericTotal > 20 || newGenericTotal < 1) {
      //validation failed
      return null;
    }
    return newGenericString;
  };

  _appendColorSymbol = (symbol, array) => {
    console.log('color');
    let symbolOrder = this._colorOrder(symbol);
    if (symbolOrder === 0) {
      //validation failed
      return null;
    }
    else if (array.length === 0) {
      array.push(symbol);
    }
    else {
      for (let i = array.length - 1; i >= 0; i--) {
        if (symbolOrder >= this._colorOrder(array[i])) {
          array.splice(i + 1, 0, symbol);
          break;
        }
        else if (i === 0) {
          array.unshift(symbol);
        }
      }
    }
    return array;
  };

  _validateManaInput = (inputArray) => {
    let genericMana = '';
    let outputArray = [];
    let valid = inputArray.every((character) => {
      if (!isNaN(parseInt(character, 10))) {
        genericMana = this._appendGenericSymbol(character, genericMana);
        return genericMana !== null;
      }
      else {
        outputArray = this._appendColorSymbol(character, outputArray);
        return outputArray !== null;
      }
    });
    if (valid){
      if (genericMana.length > 0) {
        outputArray.unshift(genericMana);
      }
      return outputArray;
    }
    else {
      return null;
    }
  };

  _handleInput = (event) => {
    let inputArray = event.target.value.split('');
    let outputArray = this._validateManaInput(inputArray);
    if (outputArray !== null) {
      this.setState({
        manaArray: outputArray
      });
    }
  };

  render() {
    let arr = this.state.manaArray;
    let ar = arr.join('');
    return (
      <div>
        <input type='text' value={ar} onChange={this._handleInput} />
        <ManaCost costArray={this.state.manaArray} />
      </div>
    );
  }
}

export default ManaInput;
