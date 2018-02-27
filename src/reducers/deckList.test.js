import reducer from './deckList.js'
import initialState from './initialState.js'

let testState1 = {
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
    },
    'r': {
      id : 'r',
      manaCost : ['r'],
      cmc : 1,
      colors : 1,
      count : 0,
      w : 0,
      u : 0,
      b : 0,
      r : 1,
      g : 0
    }
  },
  allIds: ['plains','island','swamp','mountain','forest', 'r'],
  landCount: 0,
  spellCount: 0
};

let testState2 = {
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
    },
    'r': {
      id : 'r',
      manaCost : ['r'],
      cmc : 1,
      colors : 1,
      count : 5,
      w : 0,
      u : 0,
      b : 0,
      r : 1,
      g : 0
    }
  },
  allIds: ['plains','island','swamp','mountain','forest', 'r'],
  landCount: 0,
  spellCount: 5
};

describe('deckList reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState.deckList)
  });

  it('should handle ADD_SPELL for a uniques spell id', () => {
    let state = initialState.deckList;
    let expectedState = testState1;
    let action = {
      type: 'ADD_SPELL',
      manaCost: ['r']
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should return the same state for ADD_SPELL when the spell id is already present', () => {
    let state = testState1;
    let expectedState = testState1;
    let action = {
      type: 'ADD_SPELL',
      manaCost: ['r']
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_COUNT', () => {
    let state = testState1;
    let expectedState = testState2;
    let action = {
      type: 'CHANGE_COUNT',
      id: 'r',
      count: 5
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SPELL when id is found', () => {
    let state = testState2;
    let expectedState = initialState.deckList;
    let action = {
      type: 'REMOVE_SPELL',
      id: 'r'
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should return the same state for REMOVE_SPELL when id is not found', () => {
    let state = initialState.deckList;
    let expectedState = initialState.deckList;
    let action = {
      type: 'REMOVE_SPELL',
      id: 'r'
    };

    expect(reducer(state, action)).toEqual(expectedState);
  })
});