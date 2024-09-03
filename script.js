// script.js
document.addEventListener("DOMContentLoaded", function () {
    const radioStream = document.getElementById('radio-stream');
    const playButton = document.getElementById('play-button');
    const stopButton = document.getElementById('stop-button');
    const volumeControl = document.getElementById('volume');
    const eastAfricaTime = document.getElementById('east-africa-time');
    const eastAfricaDate = document.getElementById('east-africa-date');
    const flashingText = document.getElementById('flashing-text');

    // Play radio stream
    playButton.addEventListener('click', function () {
        radioStream.play()
            .then(() => {
                console.log("Radio started playing.");
            })
            .catch(error => {
                console.error("Error playing radio stream:", error);
            });
    });

    // Stop radio stream
    stopButton.addEventListener('click', function () {
        radioStream.pause();
        radioStream.currentTime = 0;
        console.log("Radio stopped.");
    });

    // Adjust volume
    volumeControl.addEventListener('input', function () {
        radioStream.volume = volumeControl.value / 100;
        console.log("Volume set to:", radioStream.volume);
    });

    // Function to update the East Africa time
    function updateEastAfricaTime() {
        const now = new Date();
        const options = { timeZone: 'Africa/Nairobi', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        eastAfricaTime.textContent = `East Africa Time: ${now.toLocaleTimeString('en-US', options)}`;
    }

    // Function to update the East Africa date
    function updateEastAfricaDate() {
        const now = new Date();
        const dateOptions = { timeZone: 'Africa/Nairobi', day: '2-digit', month: '2-digit', year: 'numeric' };
        eastAfricaDate.textContent = `East Africa Date: ${now.toLocaleDateString('en-US', dateOptions)}`;
    }

    // Update East Africa time and date initially and every second
    updateEastAfricaTime();
    updateEastAfricaDate();
    setInterval(updateEastAfricaTime, 1000); // Update time every second

    // Flashing effect for "Turkana Music Online" every 5 minutes
    function startFlashingEffect() {
        flashingText.classList.add('flash');
        setTimeout(() => {
            flashingText.classList.remove('flash');
        }, 1000 * 60 * 5); // Remove flashing effect after 5 minutes
    }

    // Start the flashing effect every 5 minutes
    setInterval(startFlashingEffect, 1000 * 60 * 5);
});
