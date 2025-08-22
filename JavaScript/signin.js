// const form = document.querySelector("#signinForm");
// const emailInput = document.querySelector("#email");
// const passwordInput = document.querySelector("#password");
// const roleInput = document.querySelector("#role");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();
//     const role = roleInput.value;

//     if (!email || !password || !role) {
//         alert("Please fill in all fields and select a role.");
//         return;
//     }

//     // Derive username from email
//     let username = email.split("@")[0];        // take part before "@"
//     username = username.replace(/[._]/g, " ");
//     username = username
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");                            // capitalize each word

//     // Save to localStorage
//     localStorage.setItem("username", username);
//     localStorage.setItem("useremail", email);

//     alert("Sign in successful! Redirecting...");

//     if (role === "doctor") {
//         window.location.href = "doctor-dashboard.html";
//     } else if (role === "patient") {
//         window.location.href = "appointment.html";
//     } else {
//         alert("Please select a valid role.");
//     }
// });
