import useFetch from './hooks/useFetch';
import MoviesList from './components/MoviesList';
import classes from './App.module.scss';

function App() {
  const {
    movies,
    isLoading,
    error,
    fetchData,
  } = useFetch();

  let childElement = <p>Loading...</p>;
  if (!isLoading && !error) {
    childElement = <MoviesList movies={movies} />;
  } else if (error) {
    childElement = <p>{ error }</p>;
  }

  return (
    <>
      <section className={classes.app__section}>
        <button
          type='button'
          onClick={fetchData}
        >
          Fetch Movies
        </button>
      </section>

      <section className={classes.app__section}>
        { childElement }
      </section>
    </>
  );
}

export default App;
