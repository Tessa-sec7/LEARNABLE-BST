const username = localStorage.getItem("username");
const useremail = localStorage.getItem("useremail");

if (username && useremail) {
    document.getElementById("userName").textContent = username;
    document.getElementById("userEmail").textContent = useremail;
} else {
    document.getElementById("userName").textContent = "No name found.";
    document.getElementById("userEmail").textContent = "No email found.";
}