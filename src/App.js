import React, { useState, useEffect } from 'react';
import './App.css';
import AdviceCard from './components/AdviceCard';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState('');
  const [image, setImage] = useState();
  const [term, setTerm] = useState('');

  useEffect(() => {
    async function fetchAdvice() {
      setIsLoading(true);
      await fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
          const { advice } = data.slip;
          setAdvice(advice);
        })
        .catch(err => console.log(err));
        setIsLoading(false);
    }
    fetchAdvice();
  }, [advice])

  return (
    <div className="app">
      <AdviceCard
        changeAdvice={() => setAdvice()}
        advice={advice}
        isLoading={isLoading}
      />
    </div>
  )  
}

export default App;