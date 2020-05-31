import React, { useState } from 'react';

const ImageSearch = ({ setTerm }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setTerm(text);
  }

  return(
    <div style={style.container}>
    <form style={style.form} onSubmit={onSubmit}>
      <input style={style.input} onChange={e => setText(e.target.value)} placeholder="Search Image Term..." />
      <button style={style.button} type="submit">Search</button>
    </form>
  </div>
  )
}

const style = {
  container: {
    padding: 12
  },
  form: {
    height: '34px',
    maxHeight: '34px',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    padding: '.25rem 1rem',
    fontSize: '1.2rem'
  },
  button: {
    marginLeft: '.25rem',
    height: '100%',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    backgroundColor: "rgba(24, 63, 63, 0.81)",
    color: "white"
  }
}

export default ImageSearch;