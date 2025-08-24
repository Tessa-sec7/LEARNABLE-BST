document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const slidebar = document.querySelector(".slidebar");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    slidebar.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!slidebar.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove("active");
      slidebar.classList.remove("active");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      hamburger.classList.remove("active");
      slidebar.classList.remove("active");
    }
  });
});

//active slidebar items
const menuItems = document.querySelectorAll(" p");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

//doctors real time name
let email;
let doctorName;
if (email && email.includes("@")) {
  adminName = email.split("@")[0];

  document.getElementById("doctorName").textContent = "Dr." + doctorName;
} else {
  document.getElementById("doctorName").textContent = "Doctor Tylor";
}
