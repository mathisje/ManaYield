import reducer from './tabIndex.js'
import initialState from './initialState.js'

describe('tabArray reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState.tabIndex)
  });

  it('should handle SWITCH_TAB', () => {
    let state = initialState.tabIndex;
    let expectedState = 1;
    let action = {
      type: 'SWITCH_TAB',
      index: 1
    };

    expect(reducer(state, action)).toEqual(expectedState);
  })
});