document.addEventListener("DOMContentLoaded", function () {
    // Load user info globally (name & email)
    const username = localStorage.getItem("username");
    const useremail = localStorage.getItem("useremail");

    if (document.getElementById("userName")) {
        document.getElementById("userName").textContent = username ? username : "No name found";
    }

    if (document.getElementById("userEmail")) {
        document.getElementById("userEmail").textContent = useremail ? useremail : "No email found";
    }

    // Department page
    const nextDeptBtn = document.getElementById('next-btn');
    if (nextDeptBtn && document.getElementById('department')) {
        nextDeptBtn.addEventListener('click', function () {
            const department = document.getElementById('department').value;
            sessionStorage.setItem('selectedDepartment', department);
            window.location.href = "time-and-date.html";
        });
    }

    // Time & Date page
    const nextDateBtn = document.getElementById('next-btn');
    if (nextDateBtn && document.getElementById('appointment-date') && document.getElementById('appointment-time')) {
        nextDateBtn.addEventListener('click', function () {
            const date = document.getElementById('appointment-date').value;
            const time = document.getElementById('appointment-time').value;

            if (!date || !time) {
                alert("Please select both date and time before continuing.");
                return;
            }

            sessionStorage.setItem('selectedDate', date);
            sessionStorage.setItem('selectedTime', time);

            window.location.href = "confirm.html";
        });
    }

    // Confirm page
    if (document.getElementById('confirm-date')) {
        document.getElementById('confirm-date').textContent =
            sessionStorage.getItem('selectedDate') || "N/A";
    }
    if (document.getElementById('confirm-time')) {
        document.getElementById('confirm-time').textContent =
            sessionStorage.getItem('selectedTime') || "N/A";
    }
    if (document.getElementById('confirm-dept')) {
        document.getElementById('confirm-dept').textContent =
            sessionStorage.getItem('selectedDepartment') || "N/A";
    }
});
