const form = document.querySelector("#signinForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const roleInput = document.querySelector("#role");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const role = roleInput.value;

    if (!email || !password || !role) {
        alert("Please fill in all fields and select a role.");
        return;
    }

    // Derive username from email
    let username = email.split("@")[0];
    username = username.replace(/[._]/g, " ");
    username = username
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    // Save user info to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("useremail", email);
    localStorage.setItem("userrole", role);

    alert(`Welcome ${username}! Redirecting...`);

    // Redirect based on role
    switch (role) {
        case "doctor":
            window.location.href = "doctor-dashboard.html";
            break;
        case "patient":
            window.location.href = "user.html";
            break;
        case "admin":
            window.location.href = "admin-dashboard.html";
            break;
        default:
            alert("Please select a valid role.");
    }
});
