// Stackly Shared Components (Header, Footer, Preloader)
document.addEventListener("DOMContentLoaded", function () {
  // 1. Inject Preloader
  const preloaderPlaceholder = document.getElementById("preloader-placeholder");
  if (preloaderPlaceholder) {
    preloaderPlaceholder.innerHTML = `
      <div id="preloader">
        <div class="preloader-content text-center">
          <div class="spinner-grow text-warning" role="status" style="width: 3rem; height: 3rem;">
            <span class="visually-hidden">Loading...</span>
          </div>
          <h2 class="brand-text mt-3 text-white"><span class="text-warning">Stack</span>ly</h2>
          <div class="progress mt-2 mx-auto" style="height: 4px; width: 150px; background-color: rgba(255,255,255,0.1);">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="preloader-progress"></div>
          </div>
        </div>
      </div>
    `;
    
    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 20) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
        setTimeout(() => {
          const preloader = document.getElementById("preloader");
          if (preloader) {
            preloader.style.opacity = "0";
            setTimeout(() => {
              preloader.style.display = "none";
            }, 500);
          }
        }, 300);
      }
      const progressBar = document.getElementById("preloader-progress");
      if (progressBar) {
        progressBar.style.width = progress + "%";
        progressBar.setAttribute("aria-valuenow", progress);
      }
    }, 80);
  }

  // 2. Inject Header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    const currentPath = window.location.pathname;
    const getActive = (pageName) => currentPath.includes(pageName) ? "active" : "";
    
    // If we're on the root path, set Home to active
    const isHome = currentPath.endsWith("/") || currentPath.endsWith("index.html") ? "active" : "";

    headerPlaceholder.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-navy sticky-top shadow-sm py-3">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center fw-bold fs-3 text-white" href="index.html">
            <img src="images/logo.webp" alt="Stackly Logo" style="height: 45px; width: auto; margin-right: 8px;">
            <span class="text-warning">Stack</span>ly
          </a>
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mainNavbar">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
              <li class="nav-item">
                <a class="nav-link ${isHome}" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${getActive("workspaces.html")}" href="workspaces.html">Workspaces</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${getActive("amenities.html")}" href="amenities.html">Amenities</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${getActive("pricing.html")}" href="pricing.html">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${getActive("contact.html")}" href="contact.html">Contact</a>
              </li>
            </ul>
            <div class="d-flex align-items-center gap-3">
              <a href="login.html" class="btn btn-outline-warning rounded-pill px-4 transition-all"><i class="fa-solid fa-right-to-bracket me-2"></i>Login</a>
              
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  // 3. Inject Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = `
      <footer class="bg-navy text-light-gray pt-5 pb-3 border-top border-warning-subtle">
        <div class="container pt-4">
          <div class="row g-4 mb-5">
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="600">
              <h4 class="text-white fw-bold mb-4"><img src="images/logo.webp" alt="Stackly Logo" style="height: 45px; width: auto; margin-right: 8px;"><span class="text-warning">Stack</span>ly</h4>
              <p class="mb-4 text-secondary-white">Redefining modern coworking workspaces for freelancers, startups, and established enterprises. Work productively, connect meaningfully, and scale seamlessly.</p>
              <div class="d-flex gap-3 social-links">
                <a href="404.html" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="404.html" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="404.html" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="404.html" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            <div class="col-lg-2 col-md-6 col-6" data-aos="fade-up" data-aos-duration="800">
              <h5 class="text-white fw-semibold mb-4 text-uppercase tracking-wider">Quick Links</h5>
              <ul class="list-unstyled footer-menu">
                <li class="mb-2"><a href="index.html">Home</a></li>
                <li class="mb-2"><a href="workspaces.html">Workspaces</a></li>
                <li class="mb-2"><a href="amenities.html">Amenities</a></li>
                <li class="mb-2"><a href="pricing.html">Pricing</a></li>
                <li class="mb-2"><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-6 col-6" data-aos="fade-up" data-aos-duration="1000">
              <h5 class="text-white fw-semibold mb-4 text-uppercase tracking-wider">Space Types</h5>
              <ul class="list-unstyled footer-menu">
                <li class="mb-2"><a href="workspaces.html">Hot Desks</a></li>
                <li class="mb-2"><a href="workspaces.html">Dedicated Desks</a></li>
                <li class="mb-2"><a href="workspaces.html">Private Offices</a></li>
                <li class="mb-2"><a href="workspaces.html">Meeting Rooms</a></li>
                <li class="mb-2"><a href="pricing.html">Custom Suites</a></li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
              <h5 class="text-white fw-semibold mb-4 text-uppercase tracking-wider">Newsletter</h5>
              <p class="text-secondary-white mb-4">Stay updated with our community events, workspace design insights, and exclusive pricing discounts.</p>
              <form id="footer-newsletter-form" class="position-relative">
                <div class="input-group">
                  <input type="email" class="form-control bg-navy-light text-white border-warning-subtle rounded-start-pill py-3 px-4 shadow-none" placeholder="Your email address" required>
                  <button class="btn btn-warning rounded-end-pill px-4 text-navy fw-semibold" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          
          <hr class="border-secondary-white opacity-20 my-4">
          
          <div class="row align-items-center">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p class="mb-0 text-secondary-white fs-7">&copy; 2026 Stackly Spaces. All Rights Reserved. Designed with <span class="text-warning">&hearts;</span>.</p>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <div class="d-inline-flex gap-3 fs-7">
                <a href="404.html" class="text-secondary-white hover-warning">Privacy Policy</a>
                <span class="text-secondary-white opacity-30">|</span>
                <a href="404.html" class="text-secondary-white hover-warning">Terms of Service</a>
                <span class="text-secondary-white opacity-30">|</span>
                <a href="404.html" class="text-secondary-white hover-warning">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
    
    // Add simple validate handling to newsletter
    const newsletterForm = document.getElementById("footer-newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for subscribing to the Stackly newsletter!");
        newsletterForm.reset();
        window.location.href = "404.html";
      });
    }
  }
});
