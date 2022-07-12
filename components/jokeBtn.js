import React from 'react';
import getJoke from '../api/jokeData';

export default function JokeBtn() {
  const handleClick = () => {
    getJoke();
  };
  return (
    <button type="button" onClick={handleClick}>
      Get A Joke
    </button>
  );
}
