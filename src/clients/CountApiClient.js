import '../App.scss';
import React from 'react';

const hostName = 'https://api.countapi.xyz';
const nameSpace = 'pizza-counter'
const counterKey = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

export default class CountApiClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};

    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement() {
    let isMounted = true;
    fetch(`${hostName}/hit/${nameSpace}/${counterKey}`)
    .then(res => res.json())
      .then(result => {
        if (isMounted) this.setState({
          count: result.value
        });
      })
    .catch((err) => {
      console.error('Error: ', err)
    });
  };

  componentDidMount() {
    this._isMounted = true;

    fetch(`${hostName}/get/${nameSpace}/${counterKey}`)
    .then(res => res.json())
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
      <div>
        <div id="count-block" data-testid="count">
          Total number of pizzas clicked: <span id="pizza-count">{this.state.count}!</span>
        </div>
        <button
            onClick={() => this.handleIncrement()}
            id="add-count">
            Add a PIZZA!
        </button>
      </div>
    );
  }
}
