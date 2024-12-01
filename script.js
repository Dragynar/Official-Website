// Countdown Timer for Dec 10, 2024
const targetDate = new Date('2024-12-10T00:00:00');
const countdownEl = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        countdownEl.innerHTML = "We're Live!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerHTML = `Time until launch: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// Particles.js Initialization
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded');
});

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Sustainability Metrics Animation
const renewablePercentage = document.getElementById('renewable-percentage');
const carbonOffset = document.getElementById('carbon-offset');

let renewableCounter = 0;
let carbonCounter = 0;

const updateMetrics = setInterval(() => {
    if (renewableCounter < 85) {
        renewableCounter++;
        renewablePercentage.textContent = renewableCounter;
    }
    if (carbonCounter < 20) {
        carbonCounter++;
        carbonOffset.textContent = carbonCounter;
    }
    if (renewableCounter === 85 && carbonCounter === 20) {
        clearInterval(updateMetrics);
    }
}, 50);
