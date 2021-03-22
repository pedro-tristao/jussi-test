import React from 'react';
import ReactDOM from 'react-dom';
import HeaderDesk from './components/HeaderDesk-component/HeaderDesk';
import HeaderMob from './components/HeaderMob-component/HeaderMob'
import '../scss/index.scss';

function App() {
    return (
      <header id="App">
        <HeaderDesk />
        <HeaderMob />
      </header>
    );
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
