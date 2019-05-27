import getTodaysMovies from './getTodaysMovies';
import getRottenTomatoesData from './getRottenTomatoesData';

async function buildMovie (movie) {
  const resultMovie = { ...movie };
  const data = await getRottenTomatoesData(movie.originalTitle);

  resultMovie.score = data.rtScore || 0;
  resultMovie.rotten = data.rtClass === 'rotten' || false;

  return resultMovie;
}

export default async function getMovies (cityKey) {
  const fetchedMovies = await getTodaysMovies(cityKey);
  const promises = [];

  fetchedMovies.forEach(movie => promises.push(buildMovie(movie)));

  return Promise.all(promises);
}
