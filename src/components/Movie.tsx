import classes from './Movie.module.scss';

type Props = {
  title: string,
  releaseDate: string,
  openingText: string,
  className?: string,
}

function Movie({
  title,
  releaseDate,
  openingText,
  className = '',
}: Props) {
  const rootClasses = [
    'movie',
    ...className.split(' '),
  ];
  const rootClassName = rootClasses
    .map((cName) => classes[cName] || cName)
    .filter(Boolean)
    .join(' ');

  return (
    <li className={rootClassName}>
      <div className={classes.movie__heading}>
        <h2 className={classes.movie__title}>{ title }</h2>
        <time
          dateTime={releaseDate}
          className={classes.movie__date}
        >
          { releaseDate }
        </time>
      </div>
      <p className={classes.movie__opening}>{ openingText }</p>
    </li>
  );
}

export default Movie;
