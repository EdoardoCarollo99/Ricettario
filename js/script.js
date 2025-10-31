// ==================== DOM ELEMENTS ====================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const filterButtons = document.querySelectorAll(".filter-btn");
const recipeCards = document.querySelectorAll(".recipe-card");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// ==================== MOBILE MENU TOGGLE ====================
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Animate hamburger
  const spans = hamburger.querySelectorAll("span");
  if (hamburger.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Close mobile menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    const spans = hamburger.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  });
});

// ==================== SMOOTH SCROLLING ====================
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    // Only prevent default if it's an anchor link (starts with #)
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
    // Otherwise let the browser handle normal navigation
  });
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  // Add shadow to navbar on scroll
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  }
});

// ==================== FILTER RECIPES BY CATEGORY ====================
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-category");

    recipeCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (filterValue === "all" || cardCategory === filterValue) {
        card.style.display = "block";
        card.style.animation = "fadeInUp 0.6s ease-out";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ==================== SEARCH FUNCTIONALITY ====================
function searchRecipes() {
  const searchTerm = searchInput.value.toLowerCase();

  recipeCards.forEach((card) => {
    const title = card.querySelector(".recipe-title").textContent.toLowerCase();
    const description = card
      .querySelector(".recipe-description")
      .textContent.toLowerCase();
    const category = card
      .querySelector(".recipe-category")
      .textContent.toLowerCase();

    if (
      title.includes(searchTerm) ||
      description.includes(searchTerm) ||
      category.includes(searchTerm)
    ) {
      card.style.display = "block";
      card.style.animation = "fadeInUp 0.6s ease-out";
    } else {
      card.style.display = "none";
    }
  });

  // Reset filter buttons
  filterButtons.forEach((btn) => btn.classList.remove("active"));
  filterButtons[0].classList.add("active");
}

searchBtn.addEventListener("click", searchRecipes);

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchRecipes();
  }
});

// Clear search when input is empty
searchInput.addEventListener("input", () => {
  if (searchInput.value === "") {
    recipeCards.forEach((card) => {
      card.style.display = "block";
    });
  }
});

// ==================== SCROLL REVEAL ANIMATION ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe recipe cards
recipeCards.forEach((card) => {
  observer.observe(card);
});

// Observe category cards
const categoryCards = document.querySelectorAll(".category-card");
categoryCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s ease-out";
  card.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(card);
});

// Observe about section
const aboutContent = document.querySelector(".about-content");
if (aboutContent) {
  aboutContent.style.opacity = "0";
  aboutContent.style.transform = "translateY(30px)";
  aboutContent.style.transition = "all 0.8s ease-out";
  observer.observe(aboutContent);
}

// ==================== RECIPE CARD HOVER EFFECT ====================
recipeCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// ==================== PARALLAX EFFECT ON HERO ====================
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ==================== CATEGORY CARD CLICK ====================
categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const categoryName = card.querySelector("h3").textContent.toLowerCase();

    // Map category names to filter values
    const categoryMap = {
      "primi piatti": "primi",
      "secondi piatti": "secondi",
      dolci: "dolci",
      antipasti: "antipasti",
    };

    const filterValue = categoryMap[categoryName];

    // Scroll to recipes section
    const recipesSection = document.querySelector("#ricette");
    if (recipesSection) {
      recipesSection.scrollIntoView({ behavior: "smooth" });
    }

    // Activate corresponding filter
    setTimeout(() => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-category") === filterValue) {
          btn.click();
        }
      });
    }, 500);
  });
});

// ==================== RECIPE BUTTON CLICK ====================
const recipeButtons = document.querySelectorAll(".recipe-btn");
recipeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Only handle if it's a button element without href
    if (button.tagName === "BUTTON") {
      e.stopPropagation();
      const recipeTitle = button
        .closest(".recipe-card")
        .querySelector(".recipe-title").textContent;

      // Add pulse animation
      button.style.animation = "pulse 0.5s";
      setTimeout(() => {
        button.style.animation = "";
      }, 500);

      // Alert (you can replace this with a modal or navigation to recipe detail page)
      alert(
        `Apertura ricetta: "${recipeTitle}"\n\nQuesta funzionalità sarà disponibile nella prossima versione!`
      );
    }
    // If it's an anchor tag (<a>), let it navigate normally
  });
});

// ==================== LAZY LOADING IMAGES ====================
const images = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;

      // Check if image is already loaded
      if (img.complete) {
        img.style.opacity = "1";
        observer.unobserve(img);
      } else {
        img.style.opacity = "0";
        img.style.transition = "opacity 0.5s";

        img.onload = () => {
          img.style.opacity = "1";
        };

        observer.unobserve(img);
      }
    }
  });
});

images.forEach((img) => {
  imageObserver.observe(img);
});

// ==================== SCROLL TO TOP ====================
let scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = "↑";
scrollTopBtn.classList.add("scroll-top-btn");
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.visibility = "visible";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.visibility = "hidden";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollTopBtn.addEventListener("mouseenter", () => {
  scrollTopBtn.style.transform = "translateY(-5px) scale(1.1)";
});

scrollTopBtn.addEventListener("mouseleave", () => {
  scrollTopBtn.style.transform = "translateY(0) scale(1)";
});

// ==================== ADD PULSE ANIMATION ====================
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// ==================== LOADING ANIMATION ====================
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// ==================== CONSOLE LOG ====================
console.log(
  "%c🍳 Benvenuto nel Ricettario! ",
  "background: linear-gradient(135deg, #ff6b6b, #4ecdc4); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px;"
);
console.log(
  "%cSito creato con ❤️ e passione per la cucina",
  "color: #ff6b6b; font-size: 14px;"
);
