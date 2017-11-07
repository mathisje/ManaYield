import React from 'react';

import ManaCost from './manaCost.js';

const ManaButton = function(props) {
  return (
    <button className='mana-button'
            onClick={props.handleClick} >
      <ManaCost costArray={[props.symbol]} />
    </button>
  )
};

export default ManaButton;
