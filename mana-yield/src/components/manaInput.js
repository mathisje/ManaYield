import React, {Component} from 'react';

import ManaButton from './manaButton.js';
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

  render() {
    let manaArrayText = this.state.manaArray.join('');
    return (
      <div>
        <div>
          <ManaButton symbol='1'
                      handleClick={() => this._incrementGenericSymbol()} />
          <ManaButton symbol='w'
                      handleClick={() => this._appendColorSymbol('w')} />
          <ManaButton symbol='u'
                      handleClick={() => this._appendColorSymbol('u')} />
          <ManaButton symbol='b'
                      handleClick={() => this._appendColorSymbol('b')} />
          <ManaButton symbol='r'
                      handleClick={() => this._appendColorSymbol('r')} />
          <ManaButton symbol='g'
                      handleClick={() => this._appendColorSymbol('g')} />
        </div>
        <input type='text'
               value={manaArrayText}
               onChange={(e) => this._handleInput(e.target.value.toLowerCase().split(''))}
               className='text-input'
               autoComplete="off"
               autoCorrect="off"
               autoCapitalize="off"
               spellCheck="false" />
        <ManaCost costArray={this.state.manaArray} />
        <button className='add-mana-cost-button'
                onClick={() => this.props.handleAddClick(this.state.manaArray)} >
          add
        </button>
      </div>
    );
  }
}

export default ManaInput;
