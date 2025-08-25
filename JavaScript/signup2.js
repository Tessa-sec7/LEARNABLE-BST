const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const specialtyInput = document.querySelector("#specialty");
const licenceInput = document.querySelector("#licence");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        phoneInput.value.trim() === "" ||
        specialtyInput.value.trim() === "" ||
        licenseInput.value.trim() === "" ||
        passwordInput.value.trim() === "" ||
        confirmPasswordInput.value.trim() === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }
    // Basic email format check
    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }
    // Basic phone check (must be digits only & at least 7-15 digits)
    const phonePattern = /^[0-9]{7,15}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
        alert("Please enter a valid phone number");
        return;
    }
    // License number check (must be at least 5 chars)
    if (licenseInput.value.trim().length < 5) {
        alert("Please enter a valid license number (minimum 5 characters).");
        return;
    }

    // Check password match
    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match.");
        return;
    }
    alert("Sign up successful!");
    window.location.href = "signin.html";
});