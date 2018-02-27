import { combineReducers } from 'redux'
import deckList from './deckList'
import results from './results'
import tabArray from './tabArray'
import tabIndex from './tabIndex'
import tabStyles from './tabStyles'

const rootReducer = combineReducers({
  deckList,
  results,
  tabArray,
  tabIndex,
  tabStyles
});

export default rootReducer