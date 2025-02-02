document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("dashboard.html")) {
        const email = localStorage.getItem("email");
        if (email) {
            document.getElementById("user-email").textContent = email;
            document.getElementById("time-credits").textContent = localStorage.getItem("credits") || 0;
        } else {
            window.location.href = "index.html"; 
        }
    }
});

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    localStorage.setItem("credits", 0);
    window.location.href = "dashboard.html";
}

function uploadVideo() {
    const fileInput = document.getElementById("video-upload");
    const duration = parseInt(document.getElementById("video-duration").value, 10);

    if (!fileInput.files.length || isNaN(duration) || duration <= 0) {
        alert("Please upload a video and enter a valid duration.");
        return;
    }

    const credits = Math.floor(duration / 10);
    let currentCredits = parseInt(localStorage.getItem("credits"), 10) || 0;
    currentCredits += credits;
    
    localStorage.setItem("credits", currentCredits);
    document.getElementById("time-credits").textContent = currentCredits;

    alert(`Video uploaded! You earned ${credits} credits.`);
}

function watchVideo() {
    const watchMinutes = parseInt(document.getElementById("watch-duration").value, 10);
    let currentCredits = parseInt(localStorage.getItem("credits"), 10) || 0;

    if (isNaN(watchMinutes) || watchMinutes % 10 !== 0 || watchMinutes <= 0) {
        alert("Enter a valid duration (multiples of 10).");
        return;
    }

    const neededCredits = watchMinutes / 10;

    if (neededCredits > currentCredits) {
        alert("Not enough credits! Upload more videos to earn credits.");
        return;
    }

    currentCredits -= neededCredits;
    localStorage.setItem("credits", currentCredits);
    document.getElementById("time-credits").textContent = currentCredits;

    alert(`You are now watching a skill video for ${watchMinutes} minutes.`);
}
