console.log("Portfolio Website Loaded Successfully");

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
/* Typewriter Effect for Text*/

let i = 0;
let text = "Welcome to My Portfolio site! My Name is Ryan Shanahan";
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Contact button alert
document.querySelector('#contact').addEventListener('click', () => {
  alert('Thank you for visiting! Feel free to reach out to any of my socials listed below!');
});