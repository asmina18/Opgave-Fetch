import React, { useState, useEffect } from 'react';
import './App.css';
//Eto kod katoriy ya napisala 
function App() {
  const [joke, setJoke] = useState('');

  const fetchJoke = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';

    fetch(url)
      .then(res=> res.json())
      .then(data => {

        const jokeText = `${data.setup} ${data.punchline}`; 
        setJoke(jokeText);
      })
      
  };

  useEffect(() => {
    fetchJoke(); 
  }, []);

  console.log('Joke', joke);

  return (
    <div className="App">
      <h1>Joke App</h1>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get Joke</button>
    </div>
  );
}

export default App;
