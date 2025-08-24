// // Nav-Items Function
// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.querySelector(".hamburger-sctn");
//   const slidebar = document.querySelector(".slidebar");

//   hamburger.addEventListener("click", (e) => {
//     e.stopPropagation();
//     hamburger.classList.toggle("active");
//     slidebar.classList.toggle("active");
//   });

//   document.addEventListener("click", (e) => {
//     if (!slidebar.contains(e.target) && !hamburger.contains(e.target)) {
//       hamburger.classList.remove("active");
//       slidebar.classList.remove("active");
//     }
//   });

//   window.addEventListener("resize", () => {
//     if (window.innerWidth > 900) {
//       hamburger.classList.remove("active");
//       slidebar.classList.remove("active");
//     }
//   });
// });

// // Slideshow Function
document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.querySelector('.slideshow');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const slideCount = slides.length;

  function showSlide(index) {
    slideshow.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
  }

  // Start the slideshow
  setInterval(nextSlide, 3000); // Change slide every 3 seconds

  // Initial position
  showSlide(currentIndex);
});