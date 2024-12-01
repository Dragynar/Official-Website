// Countdown Timer Functionality
const countdownElement = document.getElementById('countdown');
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 7); // 7 days from today

function updateCountdown() {
    const now = new Date();
    const timeDifference = launchDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

