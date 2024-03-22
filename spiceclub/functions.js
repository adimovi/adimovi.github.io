// Function to animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate'); // Select elements with 'animate' class
  
    // Loop through each element
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      // Check if the element is in the viewport
      if (elementPosition < windowHeight) {
        const animationType = element.getAttribute('data-animation'); // Get animation type from data attribute
        element.classList.add('animated', animationType); // Add animation class based on data attribute
      } else {
        element.classList.remove('animated', animationType); // Remove animation class if element is out of viewport
      }
    });
  }
  
  // Event listener for scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Call the function once on page load to check initial state
  animateOnScroll();



  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 300) { // Change 200 to the number of pixels scrolled when you want the color change to occur
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Get all the links in the navigation
const links = document.querySelectorAll('.top-nav a');
// Loop through the links and add a click event listener to each one
links.forEach(link => {
  link.addEventListener('click', function () {
    // Remove the "active" class from all links
    links.forEach(link => link.classList.remove('active1'));

    // Add the "active" class to the clicked link
    this.classList.add('active1');
  });
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 300) { // Change 200 to the number of pixels scrolled when you want the color change to occur
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });