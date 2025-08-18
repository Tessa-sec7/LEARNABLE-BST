document.getElementById('next-btn').addEventListener('click', function () {
    const department = document.getElementById('department').value;

    sessionStorage.setItem('selectedDepartment', department);

    window.location.href = "time-and-date.html";
});
