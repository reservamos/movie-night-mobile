
const rottenURL = 'https://www.rottentomatoes.com/api/private/v2.0/search/';

const cleanMovieName = name => name.replace(/\(.+/, '');

export default async function getRottenTomatoesData (movieName) {
  try {
    const response = await fetch(`${rottenURL}?limit=1&q=${cleanMovieName(movieName)}`);
    const data = await response.json();
    const movie = data.movies[0];

    if (movie) {
      return {
        rtScore: movie.meterScore,
        rtClass: movie.meterClass,
      };
    }

    return {};
  } catch {
    return {};
  }
}
