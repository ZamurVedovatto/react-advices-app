import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  state = { 
    advice: '',
    isLoading: false
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = async () => {
    this.setState({ isLoading: true, advice: '' });
    await axios.get('https://api.adviceslip.com/advice')
      .then(response => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch(err => console.log(err));
    this.setState({ isLoading: false });
  }
  
  render() {
    const { advice, isLoading } = this.state;
    return (
      <div className="app">
        <div className="card">          
          { 
            advice === '' ?
              <h5>Loading...</h5>
              :
              <h3 className="heading">{advice}</h3>
          }     
          <button className={`button ${ isLoading ? 'd-none': '' }`} onClick={this.fetchAdvice}>
            <span>Give me another advice</span>
          </button>
        </div>
      </div>
    )
  }
}