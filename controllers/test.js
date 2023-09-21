const fetch = require('node-fetch');

async function here () {
const url = 'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2Fadventure';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bc579c69a3msh5488c4b48da0464p11ec5ejsnc2fdee9c50e4',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
};

here();
