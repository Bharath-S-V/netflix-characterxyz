import React from 'react';
import MovieDetails from './MovieDetails';

const Hero = ({ moviePosters }) => {
  console.log(moviePosters);
  return (
    <div>
      <MovieDetails />
    </div>
  );
};

export default Hero;
