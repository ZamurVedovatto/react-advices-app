import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState('');
  const [image, setImage] = useState();
  const [term, setTerm] = useState('');

  useEffect(() => {
    async function fetchAdvice() {
      setIsLoading(true);
      fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
          const { advice } = data.slip;
          setAdvice(advice);
        })
        .catch(err => console.log(err));
        setIsLoading(false);
    }
    fetchAdvice();
  }, [])

  return (
    <div className="app">
      <div className="card">          
        { 
          advice === '' ?
            <h5>Loading...</h5>
            :
            <h3 className="heading">{advice}</h3>
        }     
        <button className={`button ${ isLoading ? 'd-none': '' }`}>
          <span>Give me another advice</span>
        </button>
      </div>
    </div>
  )  
}

export default App;