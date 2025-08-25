const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm");

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        phoneInput.value.trim() === "" ||
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

    // Check password match
    if (passwordInput.value.trim !== confirmPasswordInput.value) {
        alert("Password do not match.");
        return;
    }
    alert("Sign up successful");
    window.location.href = "signin.html";
});

document.getElementById("signup-as").addEventListener("change", function () {
    let selected = this.value;
    if (selected === "doctor") {
        window.location.href = "signup2.html";
    } else if (selected === "patient") {
        window.location.href = "signup1.html";
    }
});