// document.addEventListener("DOMContentLoaded", function () {
//     // ✅ Load user info globally
//     const username = localStorage.getItem("username");
//     const useremail = localStorage.getItem("useremail");

//     if (document.getElementById("userName")) {
//         document.getElementById("userName").textContent = username ? username : "No name found";
//     }

//     if (document.getElementById("userEmail")) {
//         document.getElementById("userEmail").textContent = useremail ? useremail : "No email found";
//     }

//     //Department selection page
//     const nextBtn = document.getElementById('next-btn');
//     if (nextBtn) {
//         nextBtn.addEventListener('click', function () {
//             const department = document.getElementById('department').value;
//             sessionStorage.setItem('selectedDepartment', department);
//             window.location.href = "time-and-date.html";
//         });
//     }

//     // Appointment confirmation page
//     const confirmDate = document.getElementById('confirm-date');
//     const confirmTime = document.getElementById('confirm-time');
//     const confirmDept = document.getElementById('confirm-dept');

//     if (confirmDate) {
//         confirmDate.textContent = sessionStorage.getItem('selectedDate') || "N/A";
//     }
//     if (confirmTime) {
//         confirmTime.textContent = sessionStorage.getItem('selectedTime') || "N/A";
//     }
//     if (confirmDept) {
//         confirmDept.textContent = sessionStorage.getItem('selectedDepartment') || "N/A";
//     }
// });
