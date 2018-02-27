import initialState from './initialState.js'

const results = (state = initialState.results, action) => {

  if (action.type === 'RESULTS') {

    return action.results;
  }

  else {
    return state;
  }

};

export default results