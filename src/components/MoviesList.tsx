import MovieType from 'models/Movie';
import Movie from './Movie';
import classes from './MoviesList.module.scss';

type Props = {
  movies: MovieType[]
}

function MovieList({ movies }: Props) {
  return (
    <ul className={classes['movies-list']}>
      {
        movies.length > 0
          ? movies.map((movie) => (
            <Movie
              className={classes['movies-list__item']}
              key={movie.id}
              title={movie.title}
              releaseDate={movie.releaseDate}
              openingText={movie.openingText}
            />
          ))
          : <p>No movies found</p>
      }
    </ul>
  );
}

export default MovieList;
