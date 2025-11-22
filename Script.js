// የጨዋታ ውሂብ (Data)
const games = [
    { id: 'freefire', name: 'Garena Free Fire', image: 'https://via.placeholder.com/200x150/FF0000/FFFFFF?text=FreeFire' },
    { id: 'mobilelegends', name: 'Mobile Legends: BB', image: 'https://via.placeholder.com/200x150/0000FF/FFFFFF?text=MLBB' },
    { id: 'pubg', name: 'PUBG Mobile', image: 'https://via.placeholder.com/200x150/00FF00/FFFFFF?text=PUBG' },
    { id: 'roblox', name: 'Roblox', image: 'https://via.placeholder.com/200x150/FFFF00/000000?text=Roblox' },
];

const gameListElement = document.getElementById('game-list');
const gameDetailsElement = document.getElementById('game-details');
const gameImageElement = document.getElementById('game-image');
const detailsTitle = gameDetailsElement.querySelector('h2');
const messageElement = document.getElementById('message');

let selectedGameId = null;

// የጨዋታ ካርዶችን ወደ ገጹ መጨመር
function renderGameList() {
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.setAttribute('data-game-id', game.id);
        card.innerHTML = `
            <img src="${game.image}" alt="${game.name} Image">
            <p>${game.name}</p>
        `;
        card.addEventListener('click', () => selectGame(game));
        gameListElement.appendChild(card);
    });
}

// አንድ ጨዋታ ሲመረጥ
function selectGame(game) {
    selectedGameId = game.id;
    
    // ዝርዝሩን ማሳየት
    detailsTitle.textContent = `የ ${game.name} ክሬዲት ግዢ`;
    gameImageElement.src = game.image;
    
    gameDetailsElement.classList.remove('hidden');
    
    // ወደ ዝርዝሩ ቦታ ወደ ላይ ማሳየት (Smooth scroll)
    gameDetailsElement.scrollIntoView({ behavior: 'smooth' });

    // የክፍያ መልዕክትን ማጽዳት
    messageElement.textContent = '';
}

// የክፍያ አዝራር ሲጫን
function handlePayment() {
    const playerId = document.getElementById('player-id').value;
    const creditAmount = document.getElementById('credit-amount').value;
    const gameName = games.find(g => g.id === selectedGameId)?.name || 'ጨዋታ';

    if (!playerId) {
        messageElement.textContent = 'እባክዎ የጨዋታ መታወቂያዎን ያስገቡ!';
        messageElement.style.color = '#e94560';
        return;
    }

    // የክፍያ ሂደትን ማስመሰል (Simulation)
    messageElement.textContent = `✅ ${gameName} ለ ID: ${playerId} የ ${creditAmount} ብር ክፍያ ተሳክቷል!`;
    messageElement.style.color = '#4CAF50';
    
    // (ማሳሰቢያ: እውነተኛ ክፍያ በስተጀርባ ሰርቨር ኮድ ያስፈልገዋል!)
}

// ድር ጣቢያው ሲከፈት ኮዱን ማስኬድ
document.addEventListener('DOMContentLoaded', renderGameList);
