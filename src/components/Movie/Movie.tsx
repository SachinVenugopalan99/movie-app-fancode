import { FC } from 'react';
import { Wrapper } from './Movie.style';

interface MovieProps {
 movie: any; 
 key: any;
}

const Movie:FC<MovieProps> = ({ movie, key }) => {
  return (
    <Wrapper>
        <div className='image' key={key}>
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>

        <div className='cover'>
          <h1 className='title'>{movie.original_title}</h1>
        </div>

        <p className='rating'>{movie.vote_average}</p>
        <div className='details'>
         <div className='overview'>Overview:</div>
          <div className='description'>{movie?.overview}</div>
        </div>
    </Wrapper>
  );
};

export default Movie;
