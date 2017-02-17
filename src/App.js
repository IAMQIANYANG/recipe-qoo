import React, { Component, PropTypes } from 'react';
import Header from './containers/Header'
import './App.css';


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
