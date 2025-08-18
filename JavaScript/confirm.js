document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('confirm-date').textContent =
        sessionStorage.getItem('selectedDate') || "N/A";

    document.getElementById('confirm-time').textContent =
        sessionStorage.getItem('selectedTime') || "N/A";

    document.getElementById('confirm-dept').textContent =
        sessionStorage.getItem('selectedDepartment') || "N/A";
});
