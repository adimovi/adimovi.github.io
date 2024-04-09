window.onload = function() {
  // Your script code here

var menu_bar = document.createRange().createContextualFragment(
  `
  
  
  <a href="#home"><img class="scroll-button" title="Go to top" id="scroll-button" src="./imgs/home/arrow-up.png"></a>

    <!--Navigation-->

    <div class="container-fluid text-center header bg-white py-3" id="home">
        <a href="index.html">
            <h1 class="mb-0 bold" style="color: var(--main-color);">
                Asia Companion Relocations
            </h1>
            
        </a>    
    </div>

    <nav class="navbar navbar-expand-lg sticky-top  border-bottom">
        
          <button class=" ms-3 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class=" navbar-toggler-icon"></span>
          </button>
          <div class="collapse  navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mx-auto  mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="about.html">About Us</a>
              </li>
              

              <li class="nav-item">
                <a class="nav-link" href="locations.html">Locations</a>
              </li>

              

              <li class="nav-item">
                <a class="nav-link" href="services.html">Services & Pricing</a>
              </li>

              <li class="nav-item">
                <a class="nav-link btn-main" href="book.html">Book a free consultation call</a>
              </li>
              
            </ul>
          </div>
        
      </nav>

    

`
);

var footer_bar = document.createRange().createContextualFragment(
`
<footer style="background-color: var(--main-color);">
  <div class="container py-5 text-white text-center">
    <div class="row">
      <div class="col-lg-4 col-12 align-self-center">
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="locations.html">Locations</a></li>
          <li><a href="services.html">Services & Pricing</a></li>
          <li><a href="book.html">Book a free consultation call</a></li>
        </ul>
      </div>
      <div class="col-lg-4 col-12 align-self-center">
        <ul>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="cookie.html">Cookie Policy</a></li>
          <li><a href="terms.html">Terms and Conditions</a></li>
        </ul>
      </div>
    
      <div class="col-lg-4 col-12 align-self-center">
        <img src="./imgs/home/fb.png" class="social-img d-block mx-auto" >
        <img src="./imgs/home/insta.png" class="social-img d-block mx-auto">   
        <img src="./imgs/home/tw.png" class="social-img d-block mx-auto" >         
        <img src="./imgs/home/ytb.png" class="social-img d-block mx-auto" >
        <img src="./imgs/home/pin.png" class="social-img d-block mx-auto">
      </div>
    </div>
    <p class="mt-5 text-center">
      Copyright asiacompanionrelocations.com
    </p>
  </div>
  
</footer>
`
);





var host = document.getElementById('host');
var footer_host = document.getElementById('footer_host');
host.appendChild(menu_bar);
footer_host.appendChild(footer_bar);


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

};