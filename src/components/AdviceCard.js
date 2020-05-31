import React from 'react';

const AdviceCard = ({ advice, isLoading, changeAdvice }) => {

  return(
    <div className="card">
      { 
        isLoading ?
          <h5>Loading...</h5>
          :
          <h3 className="heading">{advice}</h3>
      }     
      <button className={`button ${ isLoading ? 'd-none': '' }`} onClick={changeAdvice}>
        <span>Give me another advice</span>
      </button>
    </div>
  )
}

export default AdviceCard;