import { addSpell, changeCount, removeSpell, switchTab } from './'

describe('addSpell', () => {
  it('should create an action that adds a new spell to the spell list', () => {
    let manaCost = ['r'];
    let expectedAction = {
      type: 'ADD_SPELL',
      manaCost
    };
    expect(addSpell(manaCost)).toEqual(expectedAction);
  })
});

describe('changeCount', () => {
  it('should create an action that adds a new spell to the spell list', () => {
    let id = 'r';
    let count = 5;
    let expectedAction = {
      type: 'CHANGE_COUNT',
      id,
      count
    };
    expect(changeCount(id, count)).toEqual(expectedAction);
  })
});

describe('removeSpell', () => {
  it('should create an action that adds a new spell to the spell list', () => {
    let id = 'r';
    let expectedAction = {
      type: 'REMOVE_SPELL',
      id
    };
    expect(removeSpell(id)).toEqual(expectedAction);
  })
});

describe('switchTab', () => {
  it('should create an action that adds a new spell to the spell list', () => {
    let index = 1;
    let expectedAction = {
      type: 'SWITCH_TAB',
      index
    };
    expect(switchTab(index)).toEqual(expectedAction);
  })
});