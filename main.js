// Global variable to track login status
let isLoggedIn = false;

// Function to perform action after checking login status
function performAction() {
  if (!isLoggedIn) {
    console.log("Please log in to perform this action.");
    return;
  }
  console.log("Action performed successfully!");
}

// Smooth Scrolling for anchors
const smoothScrollAnchors = document.querySelectorAll('a[href^="#"]');
smoothScrollAnchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));

    // Use setTimeout for a smooth scroll delay
    setTimeout(() => {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }, 1000);
  });
});

// Active Navigation Highlight
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav a");

  window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Highlight the section in the navigation when it comes into view
      if (this.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  });
});

// Toggle Navbar Background
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    const scrollThreshold = 50;
    if (window.scrollY > scrollThreshold) {
      // Add both classes for background and text color
      navbar.classList.add("bg-primary", "text-white");
    } else {
      // Remove both classes if the scroll position is not beyond the threshold
      navbar.classList.remove("bg-primary", "text-white");
    }
  });
});

// Advertisment display function
document.addEventListener("DOMContentLoaded", function () {
  var advertContainer = document.getElementById("advertContainer");
  var paragraphs = document.querySelectorAll(".advert .card-text");

  var index = 0;

  function displayNextParagraph() {
    // Set opacity to 0 for fading out the current paragraph
    paragraphs[index].style.opacity = 0;
    index = (index + 1) % paragraphs.length;
    paragraphs[index].style.opacity = 2;
  }

  setInterval(displayNextParagraph, 1500);
});





// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", function (event) {
    if (!isValidEmail(emailInput.value)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

// Locking certain elements until login
document.addEventListener("DOMContentLoaded", function () {
  // Disable the button initially
  const interactiveButton = document.getElementById("interactiveButton");
  interactiveButton.disabled = true;
  isLoggedIn = true;
  interactiveButton.disabled = !isLoggedIn;
});
