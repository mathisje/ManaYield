import React, {Component} from 'react';

import ButtonComponent from "./buttonComponent";
import ManaCost from './manaCost.js';
import ManaTextInput from './manaTextInput.js';
import ManaPalette from "./manaPalette";

class ManaInput extends Component {
  constructor() {
    super();
    this.state = {
      manaArray: [],
      typeSequenceArray: [],
      value: ''
    };
  }

  _appendManaSymbol = (symbol) => {
    if (symbol === '1') {
      this._incrementGenericSymbol();
    }
    else {
      this._appendColorSymbol(symbol);
    }
  };

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

  _validateGenericSymbol = (symbol, genericString) => {
    let newGenericString = genericString + symbol;
    let newGenericTotal = parseInt(newGenericString, 10);
    if (newGenericTotal > 20 || newGenericTotal < 1) {
      //validation failed
      return null;
    }
    return newGenericString;
  };

  _validateColorSymbol = (symbol, array) => {
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
        genericMana = this._validateGenericSymbol(character, genericMana);
        return genericMana !== null;
      }
      else {
        outputArray = this._validateColorSymbol(character, outputArray);
        return outputArray !== null;
      }
    });
    if (valid) {
      if (genericMana.length > 0) {
        outputArray.unshift(genericMana);
      }
      return outputArray;
    }
    else {
      return null;
    }
  };

  _handleInput = (inputArray) => {
    let outputArray = this._validateManaInput(inputArray);
    if (outputArray !== null) {
      this.setState({
        manaArray: outputArray
      });
    }
  };

  _appendColorSymbol = (symbol) => {
    let inputArray = this.state.manaArray;
    inputArray.push(symbol);
    this._handleInput(inputArray);
  };

  _incrementGenericSymbol = () => {
    let outputArray = this.state.manaArray;
    let genericNumber = parseInt(outputArray[0], 10);
    if (isNaN(genericNumber)) {
      outputArray.unshift('1');
    }
    else {
      if (genericNumber < 20) {
        genericNumber++;
      }
      outputArray[0] = (genericNumber + '');
    }
    this.setState({
      manaArray: outputArray
    });
  };

  _handleAddClick = () => {
    if (this.state.manaArray.length > 0) {
      this.props.addToDeck(this.state.manaArray);
    }
    this.setState({
      manaArray: []
    })
  };

  render() {
    let manaArrayText = this.state.manaArray.join('');
    return (
      <div>
        <ManaPalette containerClass='mana-input-row'
                     palette={['1','w','u','b','r','g']}
                     paletteHandler={this._appendManaSymbol} />
        <div className='mana-input-row'>
          <ButtonComponent buttonClass='add-remove-button'
                           buttonIcon='+'
                           clickHandler={this._handleAddClick} />
          <ManaTextInput controlledValue={manaArrayText}
                         handleChange={this._handleInput} />
        </div>
        <div className='dynamic-mana-container'>
          <ManaCost costArray={this.state.manaArray} />
        </div>
      </div>
    )
  }
}

export default ManaInput;
