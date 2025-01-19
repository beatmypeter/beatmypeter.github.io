// Fan-Made Gallery
const galleryImages = [
    "fan_art_1.png",
    "fan_art_2.png",
    "fan_art_3.png",
    "fan_art_4.png",
    "fan_art_5.png"
];

const galleryContainer = document.getElementById("gallery-container");

galleryImages.forEach(imageUrl => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Fan-made art";
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
