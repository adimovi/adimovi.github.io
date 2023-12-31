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


//typing effect 

var i = 0;
var txt = 'Frontend Developer';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload =  function () {
  typeWriter()
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
