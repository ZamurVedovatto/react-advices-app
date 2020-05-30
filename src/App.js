import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  state = { advice: '' };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = async () => {
    await axios.get('https://api.adviceslip.com/advice')
      .then(response => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch(err => console.log(err))
  }
  
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h3 className="heading">{advice}</h3>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Give me another advice</span>
          </button>
        </div>
      </div>
    )
  }
}