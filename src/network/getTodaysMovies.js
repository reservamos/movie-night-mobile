const findMovieIndex = (movies, key) => movies.findIndex(movie => movie.key === key);

const extractTimes = (apiMovie) => {
  const result = [];
  apiMovie.Formats.forEach((format) => {
    let formatTimes = `${format.Language}:`;
    format.Showtimes.forEach((showtime) => {
      formatTimes += `${showtime.Time},`;
    });
    result.push(formatTimes);
  });
  return result;
};

const extractMovies = (apiTheaters) => {
  const movies = [];
  apiTheaters.forEach((apiTheater) => {
    apiTheater.Dates[0].Movies.forEach((apiMovie) => {
      const movieIndex = findMovieIndex(movies, apiMovie.Key);
      if (movieIndex !== -1) {
        movies[movieIndex].theaters.push({
          name: apiTheater.Name,
          times: extractTimes(apiMovie),
        });
      } else {
        movies.push({
          image: apiMovie.Poster,
          title: apiMovie.Title,
          originalTitle: apiMovie.OriginalTitle,
          key: apiMovie.Key,
          theaters: [{
            name: apiTheater.Name,
            times: extractTimes(apiMovie),
          }],
        });
      }
    });
  });
  return movies;
};

export default async function getTodaysMovies () {
  try {
    const data = {
      claveCiudad: 'monterrey-cumbres',
      esVIP: false,
    };

    const response = await fetch('https://www.cinepolis.com/Cartelera.aspx/GetNowPlayingByCity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    });

    const fetchedData = await response.json();
    return extractMovies(fetchedData.d.Cinemas);
  } catch (error) {
    console.log(error);
    return [];
  }
}
