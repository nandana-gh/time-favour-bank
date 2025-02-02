document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Show confirmation message
    document.getElementById("confirmationMessage").style.display = "block";

    // Clear the form
    document.getElementById("contactForm").reset();
});
