import { connect } from 'react-redux'
import { addSpell } from '../actions'
import ManaInput from './manaInput'

const mapDispatchToProps = (dispatch) => {
  return {
    addSpellHandler: (manaCost) => {
      dispatch(addSpell(manaCost))
    }
  }
};

const ManaInputContainer = connect(
  null,
  mapDispatchToProps
)(ManaInput);

export default ManaInputContainer