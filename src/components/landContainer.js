import { connect } from 'react-redux'
import { changeCount } from '../actions'
import LandList from './landList'

const getLands = (deckList) => {
  let landIds = deckList.allIds.slice(0,5);
  return landIds.map((id) => deckList.byId[id]);
};

const mapStateToProps = (state) => {
  return {
    lands: getLands(state.deckList)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCountHandler: (id, count) => {
      dispatch(changeCount(id, count))
    }
  }
};

const LandContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandList);

export default LandContainer