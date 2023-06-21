import classes from './Movie.module.scss';

type Props = {
  title: string,
  releaseDate: string,
  openingText: string,
}

function Movie({
  title,
  releaseDate,
  openingText,
}: Props) {
  return (
    <li className={classes.movie}>
      <h2 className={classes.movie__title}>
        { title }
        <time
          dateTime={releaseDate}
          className={classes.movie__date}
        >
          { releaseDate }
        </time>
      </h2>
      <p className={classes.movie__opening}>{ openingText }</p>
    </li>
  );
}

export default Movie;
