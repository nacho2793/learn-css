import React, { Component } from 'react';

import { Header, SideNav } from './components/layout';
import Routes from './routes';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideNav />
        <Routes />
      </div>
    );
  }
}

export default App;
