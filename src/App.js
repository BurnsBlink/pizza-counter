import './App.scss';
import React from 'react';
import countapi from 'countapi-js';
const counterKey = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.incrementCount = this.incrementCount.bind(this)
  }

  incrementCount() {
    countapi.hit('pizza-counter', counterKey).then(result => {
      if (this._isMounted) this.setState({
        count: result.value
      });
    })
    .catch((err) => {
      console.error('Error: ', err)
    });
  };

  componentDidMount() {
    this._isMounted = true;

    countapi.get('pizza-counter', counterKey)
      .then((result) => this.setState({
        count: result.value
      }))
      .catch((err) => {
        console.error('Error: ', err)
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="App">
        <header>FEARLESS Pizza Counter</header>

        <div data-testid="count">
          Total number of pizzas clicked: <span id="pizza-count">{this.state.count}!</span>
        </div>
        <button onClick={this.incrementCount}>
            Add a PIZZA!
        </button>
      </div>
    );
  }
}
