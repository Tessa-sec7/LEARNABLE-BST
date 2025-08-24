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

const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

fileInput.addEventListener("change", () => {
  fileList.innerHTML = ""; // clear previous list
  const files = fileInput.files;
  if (files.length > 0) {
    const ul = document.createElement("ul");
    for (let file of files) {
      const li = document.createElement("li");
      li.textContent = file.name;
      ul.appendChild(li);
    }
    fileList.appendChild(ul);
  }
});

//admin name real time
let email;
let adminName;
if (email && email.includes("@")) {
  adminName = email.split("@")[0];

  document.getElementById("adminName").textContent = "Dr." + adminName;
} else {
  document.getElementById("adminName").textContent = "Doctor Tylor";
}
