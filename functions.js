//timeline functions 
function reveal() {
  var reveals = document.querySelectorAll(".timeline");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);




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


//acordion functions
var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (let j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
      if (j != i) {
        acc[j].nextElementSibling.style.maxHeight = null;
      }
    }
    this.classList.add("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;

    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//scroll to top button functions 

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
  myFunction() , scrollFunction()
};


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function typeWriter(element) {
  var isTyping = false;
  var i = 0;
  var text = element.innerText;

  // Hide the existing content
  element.innerText = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    } else {
      // Reset isTyping to false once the text is fully typed
      isTyping = false;
    }
  }

  // Start after a delay of 1 second
  setTimeout(function() {
    if (!isTyping) {
      isTyping = true;
      type();
    }
  }, 1000);
}

window.onload = function() {
  // Get all elements with class "typewriter"
  var elements = document.querySelectorAll('.typewriter');

  // Apply typewriter effect to each element
  elements.forEach(function(element) {
    typeWriter(element);
  });
};

// open/close social bar

document.addEventListener("DOMContentLoaded", function() {
let isNavOpen = false;

function toggleNav() {
  document.getElementById("toggleArrow").classList.toggle("arrow-right");
  if (isNavOpen) {
    closeNav();
  } else {
    openNav();
  }
}



function openNav() {
  document.getElementById("mySidebar").style.width = "45px";
  document.getElementById("toggleButton").style.left = "30px";
  document.getElementById("toggleArrow").src = "img/arrow-left.png";

  isNavOpen = true;
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("toggleButton").style.left = "0px";
  document.getElementById("toggleArrow").src = "img/arrow-right.png";

  isNavOpen = false;
}
document.getElementById("toggleButton").addEventListener("click", toggleNav);

});

document.addEventListener("DOMContentLoaded", function() {
  var columnElements = document.querySelectorAll('.column');

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  // Start observing each column element
  columnElements.forEach(function(columnElement) {
    observer.observe(columnElement);
  });
});






function openModal(imgId, modalId) {
  var modal = document.getElementById(modalId);
  var img = document.getElementById(imgId);
  var modalImg = document.getElementById("img" + imgId.slice(-2));

  img.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  // Add event listener for the Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal(modalId);
    }
  });
}

function closeModal(modalId) {
  var close = document.getElementById(modalId);
  close.style.display = "none";
  document.body.style.overflow = "visible";

  // Remove event listener for the Escape key when the modal is closed
  document.removeEventListener('keydown', closeModal);
}

openModal("img1", "modal1");
openModal("img2", "modal2");
openModal("img3", "modal3");





let cards = [
  {
      "name": "Language Skills",
      "skills": ["Romanian (Native)", "English (Fluent)", "German (Basic)"],
      "source": "language.png"
  },
  {
      "name": "Digital Skills",
      "skills": ["HTML", "PHP", "CSS", "Bootstrap", "Javascript", "SQL", "Wordpress"],
      "source": "digital.png"
  },
  {
      "name": "Communication Skills",
      "skills": ["The ability to work under pressure",
          "Good abilities of public speaking",
          "Responsibility and flexibility",
          "Team Spirit",
          "Multitasking"],
      "source": "com.png"
  }
];

// Get the div where you want to display the cards
let carDiv = document.getElementById('carDiv');

// Initialize an empty string to store the concatenated HTML
let htmlContent = '';

// Loop through the array and concatenate HTML elements
cards.forEach(card => {
  htmlContent += `
  
   <div class="col-md-4 col-12  mb-4">
    <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src="img/${card.source}" class=" img-fluid mx-auto card-image">
    <p class="mb-0 bold">${card.name}</p>
  </div>
    
    <div class="flip-card-back">
    <ul class="py-4">
    ${card.skills.map(skill => `<li>${skill}</li>`).join('')}
   </ul>
    </div>
  </div>
</div>
</div>

  `;
});

// Set the final HTML content to the carDiv
carDiv.innerHTML = htmlContent;


//slideshow functions
let slideIndex = [1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


