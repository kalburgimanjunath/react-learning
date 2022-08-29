import React from 'react';
import './style.css';
import Nav from './Nav';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      counter: 0,
    };
  }
  onClickUpdate = () => {
    this.setState({ show: !this.state.show });
    this.setState({ counter: this.state.counter + 1 });
  };
  componentDidUpdate(pS, nS, SS) {
    console.log('componentDidUpdate');
    console.log(nS);
  }

  render() {
    return (
      <div>
        {this.state.show ? <Nav /> : null}
        {this.state.counter}
        <button type="button" onClick={this.onClickUpdate}>
          Toggle
        </button>
      </div>
    );
  }
}
