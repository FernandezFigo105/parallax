let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  // Limit the maximum scroll value to prevent scrolling past the content's original position
  let maxScrollValue = 500; // Set your desired maximum scroll value here

  if (value <= maxScrollValue) {
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
  }
});




// script.js
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const cardElements = document.querySelectorAll(".card-transition");

  function handleIntersect(entries, observer) {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add("active");
              }, index * 300); // Adjust the delay as needed
          } else {
              entry.target.classList.remove("active");
          }
      });
  }

  const options = {
      threshold: 0.3, // Adjust this value as needed
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  cardElements.forEach((cardElement) => {
      observer.observe(cardElement);
  });
});



