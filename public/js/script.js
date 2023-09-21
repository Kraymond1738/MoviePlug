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


function displayMovies(movies, container) {
        movies.forEach(movie => {
            const movieContainer = document.createElement("div");
            movieContainer.classList.add("movie-container");

            const movieTitle = document.createElement("h2");
            movieTitle.textContent = movie.l;
            movieContainer.appendChild(movieTitle);

            const movieYear = document.createElement("p");
            movieYear.textContent = `Year: ${movie.y}`;
            movieContainer.appendChild(movieYear);

            const movieImage = document.createElement("img");
            movieImage.src = movie.i ? movie.i.imageUrl : 'placeholder.jpg'; // Use a placeholder image if not available
            movieImage.alt = movie.l;
            movieContainer.appendChild(movieImage);

            container.appendChild(movieContainer);
        });
    };
