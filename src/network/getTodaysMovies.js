const findMovieIndex = (movies, key) => movies.findIndex(movie => movie.key === key);

const extractTimes = apiMovie => apiMovie.Formats.reduce((formatTimes, format) => {
  const times = [];
  format.Showtimes.forEach(showtime => times.push(showtime.Time));

  return {
    ...formatTimes,
    [format.Language]: times,
  };
}, {});

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
          actors: apiMovie.Actors,
          clasification: apiMovie.Rating,
          trailer: apiMovie.Trailer,
          duration: apiMovie.RunTime,
          gender: apiMovie.Gender || 'Terror',
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

export default async function getTodaysMovies (cityKey) {
  try {
    const data = {
      claveCiudad: cityKey,
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

    return fetchedData.d ? extractMovies(fetchedData.d.Cinemas) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
