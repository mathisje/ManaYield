let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

//nada

export const addSpell = (name) => {
  return {
    type: 'ADD_SPELL',
    id: nextTodoId++,
    name
  }
};

export const changeCount = (name, newCount) => {
  return {
    type: 'CHANGE_COUNT',
    name: name,
    count: newCount,
  }
};

export const removeSpell = (name) => {
  return {
    type: 'REMOVE_SPELL',
    name
  }
};

export const setManaInput = (manaCost) => {
  return {
    type: 'SET_MANA_INPUT',
    manaCost
  }
};

export const switchTab = (index) => {
  return {
    type: 'SWITCH_TAB',
    index
  }
};