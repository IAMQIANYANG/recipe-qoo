import React, { Component, PropTypes } from 'react';
import IngredientsList from './components/IngredientList';
import {recipes} from './sampleData'
import Header from './components/common/Header'
import './App.css';

const data = recipes;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
