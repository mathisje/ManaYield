export const addSpell = (manaCost) => {
  return {
    type: 'ADD_SPELL',
    manaCost
  }
};

export const changeCount = (id, count) => {
  return {
    type: 'CHANGE_COUNT',
    id,
    count
  }
};

export const removeSpell = (id) => {
  return {
    type: 'REMOVE_SPELL',
    id
  }
};

export const switchTab = (index) => {
  return {
    type: 'SWITCH_TAB',
    index
  }
};

export const resultsRequest = (deckList) => {
  return {
    type: 'RESULTS_REQUEST',
    deckList
  }
};

export const resultsSuccess = (manaSpent) => {
  return {
    type: 'RESULTS_SUCCESS',
    manaSpent
  }
};

export const resultsFailure = (error) => {
  return {
    type: 'RESULTS_FAILURE',
    error
  }
};