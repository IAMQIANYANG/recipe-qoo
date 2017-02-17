import React, { Component, PropTypes } from 'react';
import Header from './containers/Header'
import Footer from './components/common/Footer'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
