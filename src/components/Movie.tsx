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
      <h2>{ title }</h2>
      <h3>{ releaseDate }</h3>
      <p>{ openingText }</p>
    </li>
  );
}

export default Movie;
