try {    var menu_bar = document.createRange().createContextualFragment(
            `
            <div class="container-fluid header-bg py-2">
            <div class="container d-flex" style="justify-content: space-between;">
                <a href="https://www.instagram.com/brandboostersdigitalmarketing/" class="more">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                </a>
                  <a href="mailto:digitalmarketing.brandboosters@gmail.com" class="more">&#9993; <u>digitalmarketing.brandboosters@gmail.com</u></a>
            </div>
         </div>
         <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <a class="navbar-brand" href="index.html">
                    <img src="./statics/img/logo.webp" style="width: 175px;"> 
                </a>

                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Pagina de start</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="serviciiDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servicii</a>
                        <div class="dropdown-menu" aria-labelledby="serviciiDropdown">
                            <!-- Dropdown items go here -->
                            <a class="dropdown-item" href="servicii.html#branding">Branding</a>
                            <a class="dropdown-item" href="servicii.html#web">Dezvoltare Web</a>
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
                </ul>
            </div>
        </div>
    </div>

    <!-- Bootstrap 5 requires Popper.js and Bootstrap.js for dropdowns -->
    <script src="https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://unpkg.com/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>
</nav>


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
  console.log(acc);
  var i;
  
 
} catch (e) {
}

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


