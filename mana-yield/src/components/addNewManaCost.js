import React, {Component} from 'react';
import './../css/app.css';
import './../css/mana.css';

class AddNewManaCost extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <i class="ms ms-w ms-cost ms-shadow"></i>
        <i class="ms ms-u ms-cost ms-shadow"></i>
        <i class="ms ms-b ms-cost ms-shadow"></i>
        <i class="ms ms-r ms-cost ms-shadow"></i>
        <i class="ms ms-g ms-cost ms-shadow"></i>
      </div>
    );
  }
}

export default AddNewManaCost;
