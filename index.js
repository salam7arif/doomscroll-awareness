function checkUsage() {
    let hours = document.getElementById("hoursInput").value;
    let result = document.getElementById("result");
    let bar = document.getElementById("progressBar");
    let siren = document.getElementById("sirenSound");

    if (hours === "" || isNaN(hours) || hours < 0) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    hours = Number(hours);

    // Save to local storage
    localStorage.setItem("scrollHours", hours);

    // Stop sound by default
    siren.pause();
    siren.currentTime = 0;

    // Message logic
    if (hours <= 2) {
        result.textContent = "Good job 👍 Healthy usage!";
        bar.style.background = "green";
    } else if (hours <= 5) {
        result.textContent = "Moderate usage ⚠️ Be careful.";
        bar.style.background = "orange";
    } else if (hours <= 8) {
        result.textContent = "High usage 😬 Try to reduce.";
        bar.style.background = "red";
    } else {
        result.textContent = "🚨 EXTREME doomscrolling! Stop now!";
        bar.style.background = "darkred";

        // 🔊 Play siren if more than 8 hours
        siren.play();
    }

    // Progress bar (max 10 hours = 100%)
    let percentage = Math.min((hours / 10) * 100, 100);
    bar.style.width = percentage + "%";
}

siren.loop = true;
siren.play();

// Load saved data
window.onload = function () {
    let saved = localStorage.getItem("scrollHours");

    if (saved) {
        document.getElementById("hoursInput").value = saved;
        checkUsage();
    }
};