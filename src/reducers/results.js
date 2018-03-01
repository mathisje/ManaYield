import initialState from './initialState.js'

const results = (state = initialState.results, action) => {

  if (action.type === 'RESULTS_REQUEST') {
    return { ...state, fetching: true, error: null };
  }

  else if (action.type === 'RESULTS_SUCCESS') {
    return { ...state, fetching: false, manaSpent: action.manaSpent };
  }

  else if (action.type === 'RESULTS_FAILURE') {
    return { ...state, fetching: false, manaSpent: [], error: action.error };
  }

  else {
    return state;
  }

};

export default results