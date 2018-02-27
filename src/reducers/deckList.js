import initialState from './initialState.js'

const deckList = (state = initialState.deckList, action) => {

  if (action.type === 'ADD_SPELL') {
    let newSpell = createSpell(action.manaCost);
    let landList = state.allIds.slice(0,5);
    let spellList = state.allIds.slice(5);
    let index = findIndexForSpell(spellList, Math.floor(spellList.length/2), newSpell, state.byId);

    if (index === -1) {
      //mana cost as key means no duplicates allowed
      return state;
    }

    spellList.splice(index, 0, newSpell.id);
    let newById = { ...state.byId, [newSpell.id]: newSpell };
    return { ...state, byId: newById, allIds: landList.concat(spellList) };
  }

  else if (action.type === 'CHANGE_COUNT') {
    let oldCard = state.byId[action.id];
    let difference = action.count - oldCard.count;

    if (difference === 0) {
      return state;
    }

    let newCard = { ...oldCard, count: action.count };
    let newById = { ...state.byId, [action.id]: newCard };

    if (['plains','island','swamp','mountain','forest'].includes(action.id)) {
      return { ...state, byId: newById, landCount: state.landCount + difference };
    }
    else {
      return { ...state, byId: newById, spellCount: state.spellCount + difference };
    }
  }

  else if (action.type === 'REMOVE_SPELL') {
    let spell = state.byId[action.id];
    if (!spell) {
      return state;
    }
    let count = spell.count;
    let newAllIds = state.allIds.filter(id => id !== action.id);
    let { [action.id]: {}, ...newById } = state.byId;
    return { ...state, byId: newById, allIds: newAllIds, spellCount: state.spellCount - count };
  }

  else {
    return state;
  }

};

const compareManaCosts = (newSpell, otherSpell) => {
  if (newSpell.cmc > otherSpell.cmc) {
    return 'after';
  }
  if (newSpell.cmc < otherSpell.cmc) {
    return 'before';
  }
  if (newSpell.colors > otherSpell.colors) {
    return 'after';
  }
  if (newSpell.colors < otherSpell.colors) {
    return 'before';
  }
  if (newSpell.g > otherSpell.g) {
    return 'after';
  }
  if (newSpell.g < otherSpell.g) {
    return 'before';
  }
  if (newSpell.r > otherSpell.r) {
    return 'after';
  }
  if (newSpell.r < otherSpell.r) {
    return 'before';
  }
  if (newSpell.b > otherSpell.b) {
    return 'after';
  }
  if (newSpell.b < otherSpell.b) {
    return 'before';
  }
  if (newSpell.u > otherSpell.u) {
    return 'after';
  }
  if (newSpell.u < otherSpell.u) {
    return 'before';
  }
  if (newSpell.w > otherSpell.w) {
    return 'after';
  }
  if (newSpell.w < otherSpell.w) {
    return 'before';
  }
  return 'equal';
};

const createSpell = (manaCost) => {
  let w = 0,
    u = 0,
    b = 0,
    r = 0,
    g = 0,
    generic = 0,
    colors = 0;
  manaCost.forEach(function(symbol) {
    switch (symbol) {
      case 'w':
        w++;
        break;
      case 'u':
        u++;
        break;
      case 'b':
        b++;
        break;
      case 'r':
        r++;
        break;
      case 'g':
        g++;
        break;
      default:
        let tryGeneric = parseInt(symbol, 10);
        if (!isNaN(tryGeneric)) {
          generic = tryGeneric;
        }
    }
  });
  if (w > 0) {
    colors++;
  }
  if (u > 0) {
    colors++;
  }
  if (b > 0) {
    colors++;
  }
  if (r > 0) {
    colors++;
  }
  if (g > 0) {
    colors++;
  }
  let cmc = w + u + b + r + g + generic;
  return {
    id: manaCost.join(''),
    manaCost: manaCost,
    cmc: cmc,
    colors: colors,
    count: 0,
    w: w,
    u: u,
    b: b,
    r: r,
    g: g
  };
};

const findIndexForSpell = (ids, index, spell, byId) => {
  if (ids.length === 0) {
    return index;
  }
  let newSlice = [];
  let newIndex = -1; //default of -1 (no appropriate index found) will fall through when the comparison is 'equal'
  let comparisonIndex = Math.floor(ids.length/2);
  let comparison = compareManaCosts(spell, byId[ids[comparisonIndex]]);
  if (comparison === 'after') {
    newSlice = ids.slice(comparisonIndex + 1);
    newIndex = index + Math.floor(newSlice.length/2) + 1;
  }
  else if (comparison === 'before') {
    newSlice = ids.slice(0, comparisonIndex);
    newIndex = index - Math.ceil(newSlice.length/2);
  }
  return findIndexForSpell(newSlice, newIndex, spell, byId);
};

export default deckList