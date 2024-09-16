/*
const url = 'https://myanimelist.p.rapidapi.com/anime/top/all?p=1';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '683e536ef5mshe8358cfc575d40ep1198a9jsnfc23a843a67c',
        'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
    }
};

async function fetchTopAnimes() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchTopAnimes();
*/

//
const url = 'https://myanimelist.p.rapidapi.com/anime/top/all?p=1';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '683e536ef5mshe8358cfc575d40ep1198a9jsnfc23a843a67c',
        'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
    }
};

async function fetchTopAnimes() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();  // Parse JSON response
        displayAnimes(result);
    } catch (error) {
        console.error(error);
    }
}

function displayAnimes(animes) {
    const container = document.createElement('div');
    container.classList.add('anime-container');

    animes.forEach(anime => {
        const animeElement = document.createElement('div');
        animeElement.classList.add('anime-item');

        const title = document.createElement('h2');
        title.textContent = anime.title;
        
        const image = document.createElement('img');
        image.src = anime.picture_url;
        image.alt = anime.title;
        
        const link = document.createElement('a');
        link.href = anime.myanimelist_url;
        link.textContent = 'More Info';
        link.target = '_blank';

        animeElement.appendChild(title);
        animeElement.appendChild(image);
        animeElement.appendChild(link);

        container.appendChild(animeElement);
    });

    document.body.appendChild(container);
}

fetchTopAnimes();
