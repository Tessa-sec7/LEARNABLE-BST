// Enhanced Search functionality
const searchInput = document.querySelector(".search-container input");
const messageCards = document.querySelectorAll(".message-card");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  messageCards.forEach((card) => {
    const patientName = card
      .querySelector(".details span")
      .textContent.toLowerCase();
    card.style.display = patientName.includes(searchTerm) ? "flex" : "none";
  });
});

// Making the message responsive
const messageInput = document.querySelector(".message-input input");
const sendButton = document.querySelector(".message-input button");
let selectedPatient = null;

// Add click event to message cards to select patient
messageCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Remove previous selection
    messageCards.forEach(
      (c) => (c.style.backgroundColor = "var(--background-color)")
    );
    // Highlight selected card
    card.style.backgroundColor = "var(--border)";
    selectedPatient = card.querySelector(".details span").textContent;
    messageInput.placeholder = `Message ${selectedPatient}...`;
    messageInput.focus();
  });
});

// Send message function
const sendMessage = () => {
  if (!selectedPatient) {
    alert("Please select a patient first");
    return;
  }

  const message = messageInput.value.trim();
  if (message) {
    console.log(`Message to ${selectedPatient}: ${message}`);
    messageInput.value = "";
    messageInput.placeholder = `Message ${selectedPatient}...`;
  }
};

// Send button
sendButton.addEventListener("click", sendMessage);

// Enter text
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
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

//active slidebar items
const menuItems = document.querySelectorAll(" p");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
