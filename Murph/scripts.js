
window.onload = function() {
    // Your script code here

var menu_bar = document.createRange().createContextualFragment(
    `
    
    <a href="#home"><img class="scroll-button" title="Go to top" id="scroll-button" src="./imgs/arrow-up.png"></a>

    <!--Navigation-->

    <div class="container-fluid text-center header bg-white py-3" id="home">
        <a href="index.html">
            <h1 class="mb-0 bold" style="color: var(--main-color);">
            Spice CoWorking Pubs
            </h1>
            
        </a>    
    </div>

    <nav class="navbar navbar-expand-lg sticky-top  border-bottom">
        
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mx-auto  mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="about.html">About </a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="locations.html">Locations</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="design.html">Design</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="news.html">Member’s News</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="pub.html">Create your own coworking pub</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="book.html">Make a booking</a>
              </li>


              <li class="nav-item">
                <a class="nav-link btn-main" href="member.html">Become a Member</a>
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
          <li><a href="design.html">Design</a></li>
          <li><a href="news.html">Member's News</a></li>
          <li><a href="pub.html">Create your own coworking pub</a></li>
          <li><a href="book.html">Make a booking</a></li>
          <li><a href="member.html">Book a free consultation call</a></li>
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
        <img src="./imgs/fb.png" class="social-img d-block mx-auto" >
        <img src="./imgs/insta.png" class="social-img d-block mx-auto">   
        <img src="./imgs/tw.png" class="social-img d-block mx-auto" >         
        <img src="./imgs/ytb.png" class="social-img d-block mx-auto" >
        <img src="./imgs/pin.png" class="social-img d-block mx-auto">
      </div>
    </div>
    <p class="mt-5 text-center">
      Copyright <a href="index.html">Spice CoWorking Pubs</a>
    </p>
  </div>
  
</footer>
`
);

var info = 'ceva';

var modalBox = document.createRange().createContextualFragment(
  `
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">News</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="row">
    <div class=" col-12 text-center">
        <img src="./imgs/huddle.jpg" class="img-fluid mx-auto" style="width:450px">
    </div>
    <div class=" col-12 align-self-center px-lg-4 px-2 py-lg-3 ">
<p>
    I met my boyfriend in my local coworking pub in Boston three years ago, and we are now married. Both of us still work most days from our coworking pub three years later, and we have a fantastic circle of close friends, plus there is always new characters coming and going with their life stories.
</p>
<p>
    We often organise group events/trips or activities at weekends, and we love the fact that life is never ever boring.
</p>
<p class="mb-0">
    We both also believe that our respective businesses would never have done so well without the interactive and supportive social lifestyle that we have in our local coworking pub.
</p>
        <p>
        The other thing I love is that whenever the odd asshole member shows up from time to time, the management move them on very fast, which leaves a very comfortable, safe and friendly environment to work in.
    </p>
    <p >
        Also, we love inviting our non member friends to our community pub for a few drinks in the evenings now and again.  
    </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
`
);



var host = document.getElementById('host');
var footer_host = document.getElementById('footer_host');
var modal_host = document.getElementById('modal_host');
host.appendChild(menu_bar);
footer_host.appendChild(footer_bar);
modal_host.appendChild(modalBox);


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