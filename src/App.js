import React, { Component } from 'react';
import './App.css';

import Header from './ui/Header.jsx'
import Body from './ui/Body.jsx'
import Footer from './ui/Footer.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
