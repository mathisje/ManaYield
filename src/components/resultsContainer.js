import { connect } from 'react-redux'
import { resultsRequest } from '../actions'
import Results from './results'

const mapStateToProps = (state) => {
  return {
    deckList: state.deckList,
    results: state.results
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResultsHandler: (deckList) => {
      dispatch(resultsRequest(deckList))
    }
  }
};

const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default ResultsContainer