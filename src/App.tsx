import useFetch from './hooks/useFetch';
import MoviesList from './components/MoviesList';
import './App.css';

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
      <section>
        <button
          type='button'
          onClick={fetchData}
        >
          Fetch Movies
        </button>
      </section>
      <section>
        { childElement }
      </section>
    </>
  );
}

export default App;
