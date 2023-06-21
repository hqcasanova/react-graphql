import { useState, useEffect, useCallback } from 'react';
import Movie from '../models/Movie';

const GRAPHQL_OPTS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `{
      allFilms {
        films {
          openingCrawl
          releaseDate
          title
          episodeID
        }
      }
    }`,
  }),
};
const FETCH_URL = 'https://swapi-graphql.netlify.app/.netlify/functions/index';
const parser = (data: any) => data.data.allFilms.films.map((rawMovie: any) => ({
  id: rawMovie.episodeID,
  title: rawMovie.title,
  openingText: rawMovie.openingCrawl,
  releaseDate: rawMovie.releaseDate,
}));

type Props = {
  url?: string,
  options?: Object,
  parseFunc?: (rawData: any) => Movie[],
}

function useFetch({
  url = FETCH_URL,
  options = GRAPHQL_OPTS,
  parseFunc = parser,
}: Props = {}) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Error encountered.');
      }

      const json = await response.json();

      setMovies(parseFunc(json));
    } catch (exception) {
      if (exception instanceof Error) {
        setError(exception.message);
      }
    }

    setIsLoading(false);
  }, [parseFunc, url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    movies,
    isLoading,
    error,
    fetchData,
  };
}

export default useFetch;
