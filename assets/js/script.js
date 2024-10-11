/* Header Counter script*/
document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll('.count');

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace(/[^0-9\.]/g, ''); // Extract number and convert to a number
                const speed = 200; // Speed of the animation (higher = slower)
                const increment = Math.ceil(target / speed); // Calculate increment based on speed

                if (count < target) {
                    counter.innerText = count + increment + (counter.innerText.includes('%') ? '%' : '+'); // Retain the '%' or '+' in display
                    setTimeout(updateCount, 10); // Recursive call for smooth animation
                } else {
                    counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+'); // Ensure it ends at target
                }
            };

            updateCount(); // Start the counting
        });
    });


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle the menu when the menu button is clicked
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
    
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
    
// Close the menu when a nav link is clicked
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});
    
// Close the menu when clicking outside of it
document.addEventListener("click", (e) => {
    // Check if the click was outside the navLinks and menuBtn
    const isClickInsideNav = navLinks.contains(e.target);
    const isClickInsideButton = menuBtn.contains(e.target);

    if (!isClickInsideNav && !isClickInsideButton && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
});





const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

const scrollRevealHeadline = {
    distance: "50px",
    origin: "left",
    duration: 1000,
  };
  
  
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealHeadline,
    delay: 250,
  });
  
  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealHeadline,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__content button", {
    ...scrollRevealHeadline,
    delay: 750,
  });
  
  const scrollRevealServices = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  
  ScrollReveal().reveal(".servicii-header p", {
    ...scrollRevealServices,
    delay: 250,
  });
  
  ScrollReveal().reveal(".servicii-header h3", {
    ...scrollRevealServices,
    delay: 500,
  });
  
  ScrollReveal().reveal(".servicii-cards .servicii-card", {
    ...scrollRevealServices,
    delay: 750,
  });
  
  ScrollReveal().reveal(".faq-container", {
    ...scrollRevealServices,
    delay: 250,
  });

