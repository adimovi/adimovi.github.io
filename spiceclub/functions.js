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

  document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const overlay = document.querySelector('.overlay');
    const previewImage = overlay.querySelector('.preview-image');
    const closeButton = overlay.querySelector('.close');
    const prevButton = overlay.querySelector('.prev');
    const nextButton = overlay.querySelector('.next');
    let currentImageIndex = 0;

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentImageIndex = index;
            previewImage.src = image.src;
            overlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        previewImage.src = galleryImages[currentImageIndex].src;
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        previewImage.src = galleryImages[currentImageIndex].src;
    });
});


// Get the button:
let scrollbutton = document.getElementById("scroll-button");

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Nav Functions + scroll to top trigger

window.onscroll = function () {
   scrollFunction()
};
