import React, {Component} from 'react';

import ButtonComponent from "./buttonComponent";
import ManaCost from './manaCost.js';

class ManaPalette extends Component {

  _createIcon = (manaSymbol) => {
    return (<ManaCost costArray={[manaSymbol]} />);
  };

  _handleManaSymbolClick = (manaSymbol) => {
    this.props.paletteHandler(manaSymbol)
  };

  _mapPaletteToButtons = (symbol, index) => {
    let icon = this._createIcon(symbol);
    return (
      <ButtonComponent key={index}
                       buttonClass='mana-button'
                       buttonIcon={icon}
                       clickHandler={this._handleManaSymbolClick}
                       handlerParams={symbol} />
    )
  };

  render() {
    return (
      <div className={this.props.containerClass}>
        {this.props.palette.map(this._mapPaletteToButtons)}
      </div>
    )
  }
}

export default ManaPalette;
