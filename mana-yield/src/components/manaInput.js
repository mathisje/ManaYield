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
    this._handleIt = this._handleIt.bind(this);
  }

  _append2GenericSymbol = function(symbol, array) {
    console.log('generic');
    let generic;
    if (array.length > 0) {
      generic = parseInt(array[0], 10);
    }
    if (generic) {
      let newNumber = parseInt(array[0] + symbol, 10);
      if (newNumber > 20 || newNumber < 1) {
        return [];
      }
      else {
        array[0] = newNumber.toString();
      }
    }
    else {
      array.unshift(symbol);
    }
    return array;
  };

  _colorOrder = function(symbol) {
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

  _appendGenericSymbol = function(symbol, genericString) {
    console.log('generic');
    let newGenericString = genericString + symbol;
    let newGenericTotal = parseInt(newGenericString, 10);
    if (newGenericTotal > 20 || newGenericTotal < 1) {
      //validation failed
      return null;
    }
    return newGenericString;
  };

  _appendColorSymbol = function(symbol, array) {
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

  _validateManaInput = function(inputArray) {
    let genericMana = '';
    let outputArray = [];
    //let inputArray = event.target.value.split('');
    inputArray.forEach(function(character) {
      //let digit = parseInt(character, 10);
      if (parseInt(character, 10)) {
        genericMana = ManaInput._appendGenericSymbol(character, genericMana);
        if (genericMana === null) {
          //validation failed
          return null;
        }
      }
      else {
        outputArray = ManaInput._appendColorSymbol(character, outputArray);
        if (outputArray === null) {
          //validation failed
          return null;
        }
      }
    });
    if (genericMana.length > 0) {
      outputArray.unshift(genericMana);
    }
    return outputArray;
  };

  _handleIt = function(event) {
    let inputArray = event.target.value.split('');
    let outputArray = this._validateManaInput(inputArray);
    if (outputArray !== null) {
      this.setstate({
        manaArray: outputArray
      });
    }
  };

  _handle2It = function(event) {
    let manaArray = this.state.manaArray;
    let typeSequenceArray = this.state.typeSequenceArray;
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    let checkArray = manaArray.slice();
    let check = checkArray.join('');
    if (event.target.value.length < check.length) {
      console.log('do delete');
      let q = event.target.value.split('');
      if (q.length > 1 && parseInt(q[1], 10)) {
        let temp = q[0] + q[1];
        q.splice(0,2,temp);
      }
      manaArray = q;
    }
    else {
      let lastChar = event.target.value.split('').pop();
      console.log(lastChar);
      let lastNum = parseInt(lastChar, 10);
      if (lastNum) {
        let updateArray = this._appendGenericSymbol(lastNum.toString(), manaArray);
        if (updateArray.length > 0) {
          manaArray = updateArray;
          typeSequenceArray.push(lastChar);
        }
      }
      else if ( lastChar === 'w' ||
        lastChar === 'u' ||
        lastChar === 'b' ||
        lastChar === 'r' ||
        lastChar === 'g' ) {
        manaArray = this._appendColorSymbol(lastChar, manaArray);
        typeSequenceArray.push(lastChar);
      }
    }
    this.setState({
      manaArray: manaArray,
      typeSequenceArray: typeSequenceArray
    });

/*    let value = parseInt(event.target.value, 10);
    if (value) {
      //console.log(value);
      this.setState({
        value: value
      });
    }
    else {
      this.setState({
        value: ''
      });
    }*/
  };

  render() {
    let arr = this.state.manaArray;
    let ar = arr.join('');
    return (
      <div>
        <input type='text' value={ar} onChange={this._handleIt} />
        <ManaCost costArray={this.state.manaArray} />
      </div>
    );
  }
}

export default ManaInput;
