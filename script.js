// Fan-Made Gallery
const galleryImages = [
    'https://via.placeholder.com/200?text=Fan+Art+1',
    'https://via.placeholder.com/200?text=Fan+Art+2',
    'https://via.placeholder.com/200?text=Fan+Art+3',
    'https://via.placeholder.com/200?text=Fan+Art+4',
    'https://via.placeholder.com/200?text=Fan+Art+5',
];

const galleryContainer = document.getElementById('gallery-container');

galleryImages.forEach(imageUrl => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Fan-made art';
    galleryContainer.appendChild(img);
});

// Favorite Games List
const favoriteGames = [
    'The Legend of Zelda: Breath of the Wild',
    'Super Mario Odyssey',
    'Animal Crossing: New Horizons',
    'Pokémon Scarlet and Violet',
    'Metroid Dread',
];

const gamesList = document.getElementById('games-list');

favoriteGames.forEach(game => {
    const listItem = document.createElement('li');
    listItem.textContent = game;
    gamesList.appendChild(listItem);
});
