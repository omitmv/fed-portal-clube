import React, { Component } from 'react';
import '../App.css';

import NavBar from '../../NavBar';
import Paths from '../../../core/routes/Paths';

import { GlobalProvider } from '../../../core/context/globalContext';

class App extends Component {
  componentDidMount = () => {
    console.log('App mounted');
  };

  render() {
    return (
      <GlobalProvider>
        <NavBar title="Teste" />
        <div className="content">
          <Paths />
        </div>
      </GlobalProvider>
    );
  }
}

export default App;
