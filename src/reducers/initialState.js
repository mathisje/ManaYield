import React from 'react'
import AboutTheApp from "../components/aboutTheApp";
import DeckGenerator from '../components/deckGenerator.js'
import ResultsContainer from '../components/resultsContainer.js'

const initialState = {
  deckList: {
    byId: {
      'plains': {
        id: 'plains',
        count: 0
      },
      'island': {
        id: 'island',
        count: 0
      },
      'swamp': {
        id: 'swamp',
        count: 0
      },
      'mountain': {
        id: 'mountain',
        count: 0
      },
      'forest': {
        id: 'forest',
        count: 0
      }
    },
    allIds: ['plains','island','swamp','mountain','forest'],
    landCount: 0,
    spellCount: 0
  },
  results: {
    error: null,
    fetching: false,
    manaSpent: []
  },
  tabArray: [
    {
      title: 'Deck List',
      content: (
        <div key={0}>
          <DeckGenerator />
        </div>
      )
    },
    {
      title: 'Results',
      content: (
        <div key={1}>
          <ResultsContainer />
        </div>
      )
    },
    {
      title: 'About',
      content: (
        <div key={2}>
          <AboutTheApp />
        </div>
      )
    }
  ],
  tabIndex: 0,
  tabStyles: {
    containerClass: '',
    contentContainerClass: 'tab-content-container',
    emptyClass: 'tab-empty',
    headerClass: 'tab-header',
    headerContainerClass: 'tab-header-container',
    selectedHeaderClass: 'tab-header-selected',
    titleClass: 'tab-title'
  }
};

export default initialState