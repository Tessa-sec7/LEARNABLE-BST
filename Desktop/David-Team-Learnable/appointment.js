//active slidebar items
const menuItems = document.querySelectorAll(" p");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

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

// Adding functionality to the search bar
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#Search");
  const appointmentSlots = document.querySelectorAll(
    '[class^="appointment-slot-"]'
  );

  searchInput.addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();

    appointmentSlots.forEach((slot) => {
      const patientName = slot.querySelector("p").textContent.toLowerCase();
      const timeInfo = slot.querySelector("h2").textContent.toLowerCase();
      const matchesSearch =
        patientName.includes(searchTerm) || timeInfo.includes(searchTerm);

      // Show/hide appointments with animation
      if (matchesSearch) {
        slot.style.display = "flex";
        slot.style.opacity = "1";
        slot.style.transform = "translateY(0)";
      } else {
        slot.style.opacity = "0";
        slot.style.transform = "translateY(-20px)";
        setTimeout(() => {
          slot.style.display = "none";
        }, 300);
      }
    });
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
