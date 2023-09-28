document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("movie-search-form");
    const movieResults = document.getElementById("movie-results");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const queryInput = document.getElementById("movie-query");
        const movieName = queryInput.value.trim();

        if (movieName.length === 0) {
            alert("Cant take empty string");
            console.log('Query cant be empty');
            return;
        }

        try {
            const response = await fetch(`/movie/search/${encodeURIComponent(movieName)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
	    console.log(data);
             movieResults.innerHTML = "";

            displayMovies(data.d, movieResults);

        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    });
});

// Function to display movies
function displayMovies(movies, container) {
  console.log("Displaying Movies:", movies);

  // Create an unordered list
  const movieList = document.createElement("ul");
  movieList.classList.add("movie-list");

  movies.forEach(movie => {
    // Create a list item for each movie
    const movieListItem = document.createElement("li");
    movieListItem.classList.add("movie-container");

    // Movie title
    const movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.l;
    movieListItem.appendChild(movieTitle);

    // Movie year
    const movieYear = document.createElement("p");
    movieYear.textContent = `Year: ${movie.y}`;
    movieListItem.appendChild(movieYear);

    // Movie image
    const movieImage = document.createElement("img");
    movieImage.src = movie.i ? movie.i.imageUrl : 'placeholder.jpg';
    movieImage.alt = movie.l;
    movieListItem.appendChild(movieImage);

    // Append the list item to the movie list
    movieList.appendChild(movieListItem);
  });

  // Append the movie list to the container
  container.appendChild(movieList);
}

