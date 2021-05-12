import './App.scss';
import React from 'react';
import CountApiClient from './clients/CountApiClient';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="header-title">Project Purple Cow - Pizza Counter</header>

        <CountApiClient/>
      </div>
    );
  }
}
