document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.slideshow').forEach(slideshow => {
    const cards = slideshow.querySelectorAll('.slide, .test');
    let currentIndex = 0;
    const cardCount = cards.length;

    function showCard(index) {
      slideshow.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextCard() {
      currentIndex = (currentIndex + 1) % cardCount;
      showCard(currentIndex);
    }

    setInterval(nextCard, 3000);
    showCard(currentIndex);
  });
});