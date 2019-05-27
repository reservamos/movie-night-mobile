import getTodaysMovies from './getTodaysMovies';
import getRottenTomatoesData from './getRottenTomatoesData';

async function buildMovie (movie) {
  const resultMovie = { ...movie };
  const data = await getRottenTomatoesData(movie.originalTitle);

  if (data.rtClass === 'rotten' || data.rtClass === 'certified_fresh') {
    resultMovie.rtScore = data.rtScore;
    resultMovie.rotten = data.rtClass === 'rotten';
  }
  return resultMovie;
}

export default async function fetchMovies () {
  const fetchedMovies = await getTodaysMovies();
  const promises = [];

  fetchedMovies.forEach(movie => promises.push(buildMovie(movie)));

  const movies = await Promise.all(promises);
  return movies;
}
