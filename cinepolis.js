// import axios from 'axios';
import fetch from 'node-fetch';

const findMovieIndex = (movies, key) => {
  return movies.findIndex((movie) => {
    return movie.key === key
  });
}

const extractTimes = (apiMovie) => {
  let result = []
  apiMovie.Formats.forEach((format) => {
    let formatTimes = `${format.Language}:`;
    format.Showtimes.forEach((showtime) => {
      formatTimes += `${showtime.Time},`;
    });
    result.push(formatTimes);
  });
  return result;
}

const extractMovies = (apiTheaters) => {
  let movies = [];
  apiTheaters.forEach((apiTheater) => {
    apiTheater.Dates[0].Movies.forEach((apiMovie) => {
      let movieIndex = findMovieIndex(movies, apiMovie.Key);
      if (movieIndex !== -1) {
        movies[movieIndex].theaters.push({
          name: apiTheater.Name,
          times: extractTimes(apiMovie)
        });
      } else {
        movies.push({
          "image": apiMovie.Poster,
          "title": apiMovie.Title,
          "originalTitle": apiMovie.OriginalTitle,
          "key": apiMovie.Key,
          "theaters": [{
            name: apiTheater.Name,
            times: extractTimes(apiMovie)
          }],
        });
      }
    });
  });
  return movies;
}

// export const getTodaysMovies = () => {
//   const data = {
//     claveCiudad: "monterrey-cumbres",
//     esVIP: false
//   };

//   fetch('https://www.cinepolis.com/Cartelera.aspx/GetNowPlayingByCity',{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//       "Access-Control-Allow-Origin": "*",
//     },
//     body: JSON.stringify(data)
//   }).then(response => {
//       let cinemas = null;
//       response.json().then(raw => cinemas = raw.Cinemas)
//       console.log(extractMovies(cinemas))
//       return extractMovies(cinemas);
//   })
// }

export const getTodaysMovies = async () => {
  try {

    const data = {
      claveCiudad: "monterrey-cumbres",
      esVIP: false
    };

    const response = await fetch('https://www.cinepolis.com/Cartelera.aspx/GetNowPlayingByCity',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data)
    })

    const fetchedData = await response.json();
    const movies = extractMovies(fetchedData.d.Cinemas)
    console.log(movies);

  } catch (error) {
    console.log(error);
  }
}