import React from 'react';
import ManaInputContainer from './manaInputContainer.js'
import LandContainer from './landContainer.js'
import SpellContainer from "./spellContainer.js";

const DeckGenerator = () => {
  return (
    <div>
      <ManaInputContainer />
      <LandContainer />
      <SpellContainer />
    </div>
  )
};

export default DeckGenerator;
