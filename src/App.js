import './App.scss';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0};

    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        <div id="count-block" data-testid="count">
            {this.state.count}
        </div>
        <button onClick={this.increment}>Add a Pizza!</button>
      </div>
    );
  }
}
