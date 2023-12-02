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

    setTimeout(() => {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }, 1000);
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
      navbar.classList.add("bg-primary");
      navbar.classList.add("text-white");
    } else {
      navbar.classList.remove("bg-primary");
    }
  });
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
