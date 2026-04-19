function checkUsage() {
    let hours = document.getElementById("hoursInput").value;
    let result = document.getElementById("result");
    let bar = document.getElementById("progressBar");

    if (hours === "" || hours < 0) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    hours = Number(hours);

    // Save to local storage
    localStorage.setItem("scrollHours", hours);

    // Message logic
    if (hours <= 2) {
        result.textContent = "Good job 👍 Healthy usage!";
        bar.style.background = "green";
    } else if (hours <= 5) {
        result.textContent = "Moderate usage ⚠️ Be careful.";
        bar.style.background = "orange";
    } else {
        result.textContent = "Too much doomscrolling 🚨 Take a break!";
        bar.style.background = "red";
    }

    // Progress bar (max 10 hours = 100%)
    let percentage = Math.min((hours / 10) * 100, 100);
    bar.style.width = percentage + "%";
}

// Load saved data
window.onload = function () {
    let saved = localStorage.getItem("scrollHours");

    if (saved) {
        document.getElementById("hoursInput").value = saved;
        checkUsage();
    }
};