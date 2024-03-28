const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    for (let i = 0; i < players.length; i++) {
        const player = {
            name: players[i],
            strength: Math.floor(Math.random() * 100) + 1, // Random strength between 1 and 100
            image: "images/super-" + (i + 1) + ".png", // Sequential image URL
            type: (i % 2 === 0) ? "hero" : "villain" // Alternating between hero and villain
        };
        detailedPlayers.push(player);
    }
    // Create players using for loop
    // Type your code here

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment = '';
    for (let player of players) {
        // Check if the player type matches the specified type
        if (player.type === type) {
            fragment += `
                <div class="player">
                    <img src="${player.image}" alt="">
                    <div class="name">${player.name}</div>
                    <div class="strength">${player.strength}</div>
                </div>
            `;
        }
    }

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}