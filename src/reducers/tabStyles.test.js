import reducer from './tabStyles.js'
import initialState from './initialState.js'

describe('tabArray reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState.tabStyles)
  })
});