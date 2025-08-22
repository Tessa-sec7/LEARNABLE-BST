const form = document.querySelector("#signinForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const roleInput = document.querySelector("#role");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const role = roleInput.value;

    if (!name || !email || !password || !role) {
        alert("Please fill in all fields and select a role.");
        return;
    }

    // Save name and email
    localStorage.setItem("username", name);
    localStorage.setItem("useremail", email);

    alert("Sign in successful! Redirecting...");

    if (role === "doctor") {
        window.location.href = "doctor-dashboard.html";
    } else if (role === "patient") {
        window.location.href = "appointment.html";
    }
});
