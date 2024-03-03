 var menu_bar = document.createRange().createContextualFragment(
            `
            <div class="fixed-top">
            <div class="container-fluid d-none d-md-block  header-bg py-2">
            <div class="container text-center"  >
                
                <h3 class="mb-0 text-white">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-regular fa-envelope"></i>
                </h3>
                
            </div>
         </div>
         <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid" id="home">
        <div class="container">
            <div class="row">
                <div class="col-3 align-self-center">
                <button class="custom-navbar-toggler d-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</button>
<script>
    
</script>
                </div>
                <div class="col-3">
                    <a class="navbar-brand d-block ms-4 d-md-none" href="index.html">
                        <img src="./statics/img/logo.webp" class="" style="width: 122px;">
                    </a>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarText">
                <a class="navbar-brand d-none d-md-block" href="index.html">
                    <img src="./statics/img/logo.webp" style="width: 175px;">
                </a>

                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html" onclick="closeNavbar()">Home</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="serviciiDropdown" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servicii</a>
                        <div class="dropdown-menu" aria-labelledby="serviciiDropdown">
                            <a class="dropdown-item" href="servicii.html#branding" onclick="closeNavbar()">Branding</a>
                            <a class="dropdown-item" href="servicii.html#web" onclick="closeNavbar()">Dezvoltare Web</a>
                            <a class="dropdown-item" href="servicii.html#gads" onclick="closeNavbar()">Google Ads</a>
                            <a class="dropdown-item" href="servicii.html#support" onclick="closeNavbar()">Ongoing Support</a>
                            <a class="dropdown-item" href="servicii.html#seo" onclick="closeNavbar()">SEO</a>
                            <a class="dropdown-item" href="servicii.html#ads" onclick="closeNavbar()">Facebook/Instagram Ads</a>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="despre.html" onclick="closeNavbar()">Despre noi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html" onclick="closeNavbar()">Contact</a>
                    </li>
                    <li class="nav-item ">
                    <a href="contact.html">
                    <button class="contact-button" style="margin-top:0px;">Cere Oferta</button>
                   </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>

<script src="https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://unpkg.com/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/cf94516c3a.js" crossorigin="anonymous"></script>
<script>
    
</script>

</div>
<a href="#home" id="scroll-button" onclick="topFunction()"><div class="scroll-button text-center"><i class="fa-solid fa-arrow-up"></i></div></a>

`
);

        var footer_bar = document.createRange().createContextualFragment(
          `
          <footer>
        <div class="container py-md-5">
        <div class="row px-md-0 px-3 py-5 d-flex justify-content-around ">
            <div class="col-md-3 col-12  footer-align align-self-center mb-md-0 mb-4">
                <a class="" href="index.html">
                    <img src="./statics/img/logo.webp"  style="width: 175px;filter: invert(100%);">
                </a>
                
                    <h3 class="my-3 footer-socials text-white">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-regular fa-envelope"></i>
                        </h3>
                </div>
            
            <div class="col-md-2 col-12 mb-md-0 mb-4">
                <h5>Link-uri Rapide</h5>
                <a href="index.html">Pagina de start</a><br>
                <a href="servicii.html">Servicii</a><br>
                <a href="despre.html">Despre Noi</a><br>
                <a href="contact.html">Contact</a>
            </div>
            <div class="col-md-2 col-12">
            <h5>Contactați-ne</h5>
             <a href="mailto:digitalmarketing.brandboosters@gmail.com">digitalmarketing.brandboosters@gmail.com</a><br>
             <a href="tel:0734413198">0734413198</a>
            </div>
        </div>
            <p class="text-center my-0 pb-md-0 pb-5 "><u>Copyright - Brand Boosters</u></p>
        </div>
     </footer>  
`
      );



        var host = document.getElementById('host');
        var footer_host = document.getElementById('footer_host');
        host.appendChild(menu_bar);
        footer_host.appendChild(footer_bar);    
        
function closeNavbar() {
            // Get the navbar collapse element
            var navbarCollapse = document.getElementById('navbarText');
        
            // Toggle the 'active' class for the animation
document.querySelector('.custom-navbar-toggler').addEventListener('click', function(event) {
    closeNavbar();
    event.stopPropagation(); // Prevent the click event from propagating to the document click listener
});
        
            // Check if the navbar collapse is expanded (visible)
            if (navbarCollapse.classList.contains('show')) {
                // Remove the 'show' class to hide the navbar collapse
                navbarCollapse.classList.remove('show');
            }
        }

// Event listener for the navbar toggler
document.querySelector('.custom-navbar-toggler').addEventListener('click', closeNavbar);

// Event listener to close the navbar when clicking outside
document.addEventListener('click', function (event) {
    var isClickInsideNavbar = document.getElementById('navbarText').contains(event.target);
    var isNavbarToggler = event.target.closest('.custom-navbar-toggler');

    // Check if the click is not inside the navbar and not on the navbar toggler
    if (!isClickInsideNavbar && !isNavbarToggler) {
        closeNavbar();
    }
});



        var acc = document.getElementsByClassName("accordion");
        var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active-acc");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Counter functions
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

function numara(maxNr,counterID,speed) {
  var maxNumber = maxNr;
  maxNumber = parseInt(maxNumber, 10);
  if (!isNaN(maxNumber)) {
  var counterDisplay = document.getElementById(counterID);
  var count = 0;
  console.log(counterDisplay);
  var interval = setInterval(function() {
    counterDisplay.textContent = numberWithCommas(count);
    if (count >= maxNumber) {
        clearInterval(interval);
    }
    count=count+1;
  }, speed);
  } else {
  alert("Please enter a valid number.");
  }
  };


// Your function to be executed
function laScroll() {
numara(8,'counter-display1','100');
numara(100,'counter-display2','15');
numara(150,'counter-display3','10');
}



// Check if the trigger point is scrolled over
function checkScroll() {
  var triggerPoint = document.getElementById('trigger-point');
  var triggerPosition = triggerPoint.getBoundingClientRect().top + window.scrollY;
  var currentScroll = window.pageYOffset;

  if (currentScroll >= triggerPosition) {
      // Call your function
      laScroll();
      
      // Optionally, remove the scroll event listener to prevent multiple calls
      window.removeEventListener('scroll', checkScroll);
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', checkScroll);


// scroll to top button
let mybutton = document.getElementById("scroll-button");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


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








