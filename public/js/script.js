document.addEventListener('DOMContentLoaded', () => {
    const movieSearchForm = document.getElementById('movie-search-form');
    const movieQueryInput = document.getElementById('movie-query');
    const movieResultsContainer = document.getElementById('movie-results');

    movieSearchForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const movieQuery = movieQueryInput.value.trim();

        if (movieQuery === '') {
            alert('Please enter a movie name.');
            return;
        }

        try {
            // Send the movie query as a query parameter in the URL
            const response = await fetch(`http://localhost:5000/movies/search?movie=${encodeURIComponent(movieQuery)}`);
            
            console.log(response);
            if (!response.ok) {
                throw new Error('Clientside: Failed to fetch movie data');
            }
            
            const data = await response.json();
            displayMovieResults(data);
        } catch (error) {
            console.error(error);
            movieResultsContainer.innerHTML = '<p>Clientside: Failed to fetch movie data.</p>';
        }
    });

    function displayMovieResults(data) {
        // Clear previous results
        movieResultsContainer.innerHTML = '';

        if (data.d.length === 0) {
            movieResultsContainer.innerHTML = '<p>No movies found.</p>';
            return;
        }

        const resultList = document.createElement('ul');

        data.d.forEach((movie) => {
            const listItem = document.createElement('li');

            // Create an image element for the movie poster
            const posterImg = document.createElement('img');
            posterImg.src = movie.i.imageUrl;
            posterImg.alt = movie.l; // Use the movie title as alt text
            listItem.appendChild(posterImg);

            // Create a span element for the movie title
            const titleSpan = document.createElement('span');
            titleSpan.textContent = movie.l; // Movie title
            listItem.appendChild(titleSpan);

            // Append the list item to the result list
            resultList.appendChild(listItem);
        });

        movieResultsContainer.appendChild(resultList);
    }
});
