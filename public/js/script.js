  document.addEventListener("DOMContentLoaded", async function () {
    console.log("Search1.html DOMContentLoaded");

    const searchForm = document.getElementById("movie-search-form");
    const movieResults = document.getElementById("movie-results");

    // Check if there's a movie query sent from the dashboard
    const urlParams = new URLSearchParams(window.location.search);
    const dashboardQuery = urlParams.get("dashboardQuery");
    console.log("Dashboard Query:", dashboardQuery);

    if (dashboardQuery && dashboardQuery.trim() !== "") {
      // Use the dashboard query to fetch results
      try {
        console.log("Fetching results for Dashboard Query:", dashboardQuery);
        const response = await fetch(`/movie/search/${encodeURIComponent(dashboardQuery)}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayMovies(data.d, movieResults);

        // Clear the dashboard query parameter
        const urlWithoutDashboardQuery = window.location.href.split('?')[0];
        window.history.replaceState({}, document.title, urlWithoutDashboardQuery);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
        }
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
