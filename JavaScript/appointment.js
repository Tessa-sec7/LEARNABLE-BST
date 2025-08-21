document.addEventListener("DOMContentLoaded", function () {
    const username = sessionStorage.getItem("loggedInUser");

    if (username) {
        document.getElementById("dashboard-username").textContent = username;
    } else {
        document.getElementById("dashboard-username").textContent = "Patient Name";
    }
});
