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

export default async function getMovies (cityKey) {
  const fetchedMovies = await getTodaysMovies(cityKey);
  const promises = [];

  fetchedMovies.forEach(movie => promises.push(buildMovie(movie)));

  return Promise.all(promises);
}
