function fetchMovieData(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:");
      // return null in case of an error
      return null;
    });
}

function getHighRatedMovies(movies) {
  return movies.filter((movie) => movie.rating >= 9).map((movie) => movie.name);
}

async function main() {
  const URL = "https://api.programiz.pro/api/Demo/javascript/movies";
  const movieData = await fetchMovieData(URL);

  // log the fetched movie data
  console.log(movieData);

  console.log("\nMovies Rated 9 or above:");
  const highRatedMovies = getHighRatedMovies(movieData["movies"]);
  console.log(highRatedMovies);
}

main();
