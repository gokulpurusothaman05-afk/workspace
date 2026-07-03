// Stackly Custom Applications and Animations Integrations
$(document).ready(function () {
  
  // 1. Initialize AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false
    });
  }

  // 2. GSAP Animations (micro-interactions)
  if (typeof gsap !== 'undefined') {
    // Reveal text letter animations or general elements
    gsap.from(".hero-content h1", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
    });
    
    gsap.from(".hero-content p", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.8,
      ease: "power3.out"
    });

    // GSAP Button hover effect
    $(".hover-grow").hover(
      function() {
        gsap.to(this, { scale: 1.05, duration: 0.3, ease: "power1.out" });
      },
      function() {
        gsap.to(this, { scale: 1, duration: 0.3, ease: "power1.out" });
      }
    );
  }

  // 3. CircleType & Lettering.js
  // Apply lettering to a custom header if exists
  if ($.fn.lettering && $(".lettering-text").length) {
    $(".lettering-text").lettering();
  }
  
  // Apply CircleType if exists
  if (typeof CircleType !== 'undefined' && document.getElementById("circle-type-el")) {
    new CircleType(document.getElementById("circle-type-el"));
  }

  // 4. Flatpickr (Date Time Picker)
  if (typeof flatpickr !== 'undefined' && $(".datetimepicker").length) {
    flatpickr(".datetimepicker", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      minDate: "today",
      theme: "dark"
    });
  }

  // 5. bootstrap-select initialization
  if ($.fn.selectpicker) {
    $('.selectpicker').selectpicker();
  }

  // 6. countdown timer
  if ($.fn.countdown && $("#countdown-clock").length) {
    // Set countdown to 30 days from now
    var countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 30);
    
    $("#countdown-clock").countdown(countdownDate, function (event) {
      $(this).html(
        event.strftime(
          '<div class="d-flex gap-2 justify-content-center">' +
          '<div class="countdown-box"><div class="countdown-val">%D</div><div class="fs-8 text-uppercase">Days</div></div>' +
          '<div class="countdown-box"><div class="countdown-val">%H</div><div class="fs-8 text-uppercase">Hours</div></div>' +
          '<div class="countdown-box"><div class="countdown-val">%M</div><div class="fs-8 text-uppercase">Mins</div></div>' +
          '<div class="countdown-box"><div class="countdown-val">%S</div><div class="fs-8 text-uppercase">Secs</div></div>' +
          '</div>'
        )
      );
    });
  }

  // 7. jQuery Appear & Statistics counter
  if ($.fn.appear && $(".counter-value").length) {
    $(".counter-value").appear();
    $(document.body).on("appear", ".counter-value", function (e, $affected) {
      $affected.each(function () {
        var $this = $(this);
        if (!$this.hasClass("counted")) {
          $this.addClass("counted");
          var countTo = parseInt($this.attr("data-count"), 10);
          $({ countNum: 0 }).animate(
            { countNum: countTo },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              }
            }
          );
        }
      });
    });
  }

  // 8. Jarallax (Parallax backgrounds)
  if (typeof jarallax !== 'undefined' && $(".jarallax").length) {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

  // 9. Magnific Popup (Video and Image zoom lightboxes)
  if ($.fn.magnificPopup) {
    // Video Popups
    $(".video-popup-btn").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    // Image Zoom Gallery
    $(".gallery-zoom-btn").magnificPopup({
      type: "image",
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
          return element.find('img');
        }
      }
    });
  }

  // 10. noUiSlider & wNumb (Interactive pricing calculator)
  var pricingSlider = document.getElementById("pricing-range-slider");
  if (pricingSlider && typeof noUiSlider !== "undefined") {
    noUiSlider.create(pricingSlider, {
      start: [15],
      connect: [true, false],
      step: 1,
      range: {
        min: 1,
        max: 50
      },
      format: wNumb({
        decimals: 0
      })
    });

    var pricingValue = document.getElementById("pricing-range-val");
    var totalPricingEst = document.getElementById("pricing-est-total");

    pricingSlider.noUiSlider.on("update", function (values, handle) {
      var desksCount = parseInt(values[handle], 10);
      if (pricingValue) pricingValue.innerText = desksCount;
      
      // Calculate dynamic price (e.g. ₹12,000 per desk per month, with discount scales)
      var pricePerDesk = 12000;
      if (desksCount > 10) pricePerDesk = 10000;
      if (desksCount > 25) pricePerDesk = 8500;
      
      var totalPrice = desksCount * pricePerDesk;
      if (totalPricingEst) {
        totalPricingEst.innerText = "₹" + totalPrice.toLocaleString('en-IN') + "/mo";
      }
    });
  }

  // 11. Owl Carousel / Slick Carousel / Tiny Slider (Sliders setup)
  // Testimonials Owl Carousel
  if ($.fn.owlCarousel && $(".testimonials-owl").length) {
    $(".testimonials-owl").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });
  }

  // Hero Slick Carousel (Home Hero Banner)
  if ($.fn.slick && $(".hero-slick-carousel").length) {
    $(".hero-slick-carousel").slick({
      dots: true,
      infinite: true,
      speed: 800,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: '<button class="slick-prev btn btn-outline-warning rounded-circle"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow: '<button class="slick-next btn btn-outline-warning rounded-circle"><i class="fa-solid fa-chevron-right"></i></button>'
    });
  }

  // Tiny Slider (Member Spotlights / Extra Slider)
  if (typeof tns !== 'undefined' && document.querySelector(".tiny-slider-container")) {
    tns({
      container: '.tiny-slider-container',
      items: 1,
      slideBy: 'page',
      autoplay: true,
      controls: false,
      nav: true,
      autoplayButtonOutput: false,
      responsive: {
        640: { items: 2 },
        900: { items: 3 }
      }
    });
  }

  // 12. Isotope & imagesLoaded (Filterable workspaces gallery)
  var galleryGrid = $(".gallery-isotope-grid");
  if (galleryGrid.length && typeof Isotope !== 'undefined') {
    // Initialize after images are loaded
    galleryGrid.imagesLoaded(function () {
      var iso = new Isotope(galleryGrid[0], {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        transitionDuration: '0.6s'
      });

      // Filter items on button click
      $(".gallery-filters").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        iso.arrange({ filter: filterValue });
        
        $(".gallery-filters button").removeClass("active btn-warning").addClass("btn-outline-warning");
        $(this).removeClass("btn-outline-warning").addClass("active btn-warning");
      });
    });
  }

  // 13. jQuery Validation (Forms validator)
  if ($.fn.validate) {
    // Contact Form Validation
    $("#contact-us-form").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        phone: "required",
        message: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        name: "Please enter your name",
        email: "Please enter a valid email address",
        phone: "Please enter your phone number",
        message: "Message must be at least 10 characters long"
      },
      submitHandler: function (form) {
        alert("Your message has been sent successfully! Our community manager will contact you shortly.");
        form.reset();
        window.location.href = "404.html";
        return false;
      }
    });

    // Booking form validation
    $("#booking-request-form").validate({
      rules: {
        bookName: "required",
        bookEmail: {
          required: true,
          email: true
        },
        bookPhone: "required",
        spaceType: "required",
        dateTime: "required"
      },
      submitHandler: function(form) {
        alert("Your booking request has been submitted successfully! We are checking availability and will email you confirmation details.");
        form.reset();
        window.location.href = "404.html";
        return false;
      }
    });

    // Signup Validation
    $("#signup-form").validate({
      rules: {
        signupEmail: {
          required: true,
          email: true
        },
        signupPassword: {
          required: true,
          minlength: 6
        },
        signupConfirmPassword: {
          required: true,
          equalTo: "#signupPassword"
        }
      },
      messages: {
        signupEmail: "Please enter a valid Gmail address",
        signupPassword: "Password must be at least 6 characters long",
        signupConfirmPassword: "Passwords must match"
      },
      submitHandler: function(form) {
        var email = $("#signupEmail").val();
        var prefix = email.substring(0, email.indexOf("@"));
        var name = prefix.replace(/[\._-]/g, " ");
        name = name.replace(/\b\w/g, function(l){ return l.toUpperCase(); });
        localStorage.setItem("username", name || "Stackly Member");
        
        alert("Registration successful! Redirecting to dashboard...");
        window.location.href = "404.html";
        return false;
      }
    });

    // Login Validation
    $("#client-login-form").validate({
      rules: {
        clientEmail: {
          required: true,
          email: true
        },
        clientPassword: "required"
      },
      submitHandler: function(form) {
        var email = $(form).find("input[name='clientEmail']").val();
        var prefix = email.substring(0, email.indexOf("@"));
        var name = prefix.replace(/[\._-]/g, " ");
        name = name.replace(/\b\w/g, function(l){ return l.toUpperCase(); });
        localStorage.setItem("username", name || "Stackly Member");
        
        window.location.href = "client-dashboard.html";
        return false;
      }
    });

    $("#admin-login-form").validate({
      rules: {
        adminEmail: {
          required: true,
          email: true
        },
        adminPassword: "required"
      },
      submitHandler: function(form) {
        window.location.href = "admin-dashboard.html";
        return false;
      }
    });
  }

  // 14. Dashboard Sidebar Redirection & Section scroll highlight
  // Click sidebar links to scroll/tab
  $(".sidebar-menu li a").on("click", function(e) {
    if ($(this).attr("href").startsWith("#")) {
      e.preventDefault();
      var targetId = $(this).attr("href");
      var targetSection = $(targetId);
      
      if (targetSection.length) {
        // Highlight active link
        $(".sidebar-menu li a").removeClass("active");
        $(this).addClass("active");
        
        // Scroll right dashboard panel to target
        var container = $(".dashboard-content");
        var scrollTop = targetSection.offset().top - container.offset().top + container.scrollTop();
        container.animate({
          scrollTop: scrollTop
        }, 500);
      }
    }
  });

});
