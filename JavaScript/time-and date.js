document.getElementById('next-btn').addEventListener('click', function () {
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