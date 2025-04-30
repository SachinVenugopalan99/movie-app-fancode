import React, {FC} from 'react'
import { Wrapper } from './MoviesWrapper.style'
import Movie from '../Movie/Movie'
import AnimatedComponent from '../AnimatedComponent'

interface MoviesWrapperProps{
data: any
searchQuery: string;
}

const MoviesWrapper:FC<MoviesWrapperProps> = ({data, searchQuery}) => {
  return (
    searchQuery ? 
          <Wrapper>
      {data?.length ? (
        <div>
      <div className='movies '>
        {data?.map((movie: any) => (
          <AnimatedComponent>
            <Movie
              movie={movie}
              key={Math.floor(Math.random() * movie.id * Date.now())}
            />
          </AnimatedComponent>
        ))}
            </div>
        </div>
      ) : (
        <h1 className='no_movies'>Sorry could not found any movie!</h1>
      )}
    </Wrapper>
      : 
        <Wrapper>
      {data?.length ? (
        <div>
        {data?.map((movie: any) => (
            <div className='movieContainer' id={String(movie?.year)}>
              <div className='heading'>
             {movie?.year}
              </div>
              <div className='movies '>

          {movie?.movies?.map((item: any) => (      
              <AnimatedComponent>
            <Movie
              movie={item}
              key={Math.floor(Math.random() * item.id * Date.now())}
            />
                      </AnimatedComponent>

          ))}
            </div>
            </div>
        ))}

        </div>

      ) : (
        <h1 className='no_movies'>Sorry could not found any movie!</h1>
      )}
    </Wrapper>

  )
}

export default MoviesWrapper
