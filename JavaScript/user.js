document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("useremail");

    if (username && email) {
        document.getElementById("userName").textContent = username;
        document.getElementById("userEmail").textContent = email;
    } else {
        // If no data, redirect back to login
        window.location.href = "signin.html";
    }
});
