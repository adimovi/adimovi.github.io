


var styles = document.createElement('link');
styles.rel = 'stylesheet';
styles.href = './statics/style.css';
document.head.appendChild(styles);





var cdn1 = document.createElement('link');
cdn1.rel = 'stylesheet';
cdn1.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
cdn1.integrity ='sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN';
cdn1.crossOrigin ='anonymous';
document.head.appendChild(cdn1);



  
var menu_bar = document.createRange().createContextualFragment(
            `
            <div class="fixed-top">
            <div class="container-fluid  header-bg py-2">
            <div class="container text-center"  >
                
                <h3 class="mb-0 text-white">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-regular fa-envelope"></i>
                </h3>
                
            </div>
         </div>
         <nav class="navbar navbar-expand-lg bg-light" >
    <div class="container-fluid" id="home">
   
        <div class="container">
         <div class="row">
         <div class="col-3 align-self-center">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            <div class="col-3">
            <a class="navbar-brand d-block ms-4  d-md-none" href="index.html">
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
                        <a class="nav-link" aria-current="page" href="index.html">Pagina de start</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="serviciiDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servicii</a>
                        <div class="dropdown-menu" aria-labelledby="serviciiDropdown">
                            <a class="dropdown-item" href="servicii.html#branding">Branding</a>
                            <a class="dropdown-item" href="servicii.html#web">Dezvoltare Web</a>
                            <a class="dropdown-item" href="servicii.html#gads">Google Ads</a>
                            <a class="dropdown-item" href="servicii.html#support">Ongoing Support</a>
                            <a class="dropdown-item" href="servicii.html#seo">SEO</a>
                            <a class="dropdown-item" href="servicii.html#ads">Facebook/Instagram Ads</a>
                        </div>
                    </li>
                   
                    <li class="nav-item">
                        <a class="nav-link" href="despre.html">Despre noi</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <script src="https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://unpkg.com/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/cf94516c3a.js" crossorigin="anonymous"></script>
</nav>
</div>
<a href="#home" id="scroll-button" onclick="topFunction()"><div class="scroll-button text-center"><i class="fa-solid fa-arrow-up"></i></div></a>

`
);

        var footer_bar = document.createRange().createContextualFragment(
          `
          <footer>
        <div class="container py-5">
            <p class="text-center my-0"><u>Copyright - Brand Boosters</u></p>
        </div>
     </footer>
`
      );


  

        var host = document.getElementById('host');
        var footer_host = document.getElementById('footer_host');
        host.appendChild(menu_bar);
        footer_host.appendChild(footer_bar);     


        var acc = document.getElementsByClassName("accordion");
        var i;
  
 


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

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
numara(150,'counter-display3','15');
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


// Get the button:
let mybutton = document.getElementById("scroll-button");

// When the user scrolls down 20px from the top of the document, show the button
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
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




