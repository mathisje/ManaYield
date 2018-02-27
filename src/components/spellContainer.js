import { connect } from 'react-redux'
import { changeCount, removeSpell } from '../actions'
import SpellList from './spellList'

const getSpells = (deckList) => {
  let spellIds = deckList.allIds.slice(5);
  return spellIds.map((id) => deckList.byId[id]);
};

const mapStateToProps = (state) => {
  return {
    spells: getSpells(state.deckList)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCountHandler: (id, count) => {
      dispatch(changeCount(id, count))
    },
    removeSpellHandler: (id) => {
      dispatch(removeSpell(id))
    }
  }
};

const SpellContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellList);

export default SpellContainer