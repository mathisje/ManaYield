import initialState from './initialState.js'

const tabIndex = (state = initialState.tabIndex, action) => {

  if (action.type === 'SWITCH_TAB') {

    return action.index;
  }

  else {
    return state;
  }

};

export default tabIndex