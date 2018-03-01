import React, {Component} from 'react';

class Results extends Component {

  componentDidMount() {
    if (this.props.results.manaSpent.length === 0) {
      this.fetchResults();
    }
  }

  fetchResults = () => {
    this.props.fetchResultsHandler(this.props.deckList);
  };

  mapResultsToDisplay = (result, index) => {
    return (
      <div key={index}>
        {result}
      </div>
    )
  };

  render() {
    let fetching = (<div>fetching</div>);
    let error = (<div>error</div>);
    if (this.props.results.fetching) {
      return fetching
    }
    if (this.props.results.error) {
      return error;
    }
    return (
      <div className='container'>
        <div className='deck-list'>
          {this.props.results.manaSpent.map(this.mapResultsToDisplay)}
        </div>
      </div>
    )
  }
}

export default Results;
