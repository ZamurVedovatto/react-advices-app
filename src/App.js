import React, { useState, useEffect } from 'react';
import './App.css';
import AdviceCard from './components/AdviceCard';
import ImageSearch from './components/ImageSearch';

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

  useEffect(() => {
    async function fetchImage() {
      setIsLoading(true);
      await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
          const length = data.hits.length -1;
          const rand = (Math.random() * (length)).toFixed(0);
          const { largeImageURL } = data.hits[rand]
          setImage(largeImageURL);
        })
        .catch(err => console.log(err));
      setIsLoading(false);
    };
    fetchImage();
  }, [term, image]);


  return (
    <div className="app" style={{ backgroundImage: `url(${image})`}}>
      <AdviceCard
        changeAdvice={() => setAdvice()}
        advice={advice}
        isLoading={isLoading}
      />
      <div className="search">
        <ImageSearch
          setTerm={(text) => setTerm(text)}
        />
      </div>
    </div>
  )  
}

export default App;