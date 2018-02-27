import { connect } from 'react-redux'
import { switchTab } from '../actions'
import Tabs from './tabs'

const mapStateToProps = (state) => {
  return {
    tabArray: state.tabArray,
    tabIndex: state.tabIndex,
    tabStyles: state.tabStyles
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchTabHandler: (index) => {
      dispatch(switchTab(index))
    }
  }
};

const TabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);

export default TabContainer