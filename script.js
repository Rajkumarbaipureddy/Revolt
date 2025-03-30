// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    console.log('ReVolt Energy Website Loaded Successfully!');

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simulate form submission (replace with backend integration)
            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been submitted.`);
                contactForm.reset();
            } else {
                alert('Please fill in all fields before submitting.');
            }
        });
    }

    // Simulate Dashboard Data
    const collectedBatteries = document.getElementById('collected');
    const repurposedBatteries = document.getElementById('repurposed');
    const contributionPercentage = document.getElementById('contribution');

    if (collectedBatteries && repurposedBatteries && contributionPercentage) {
        // Simulated Data (Replace with real-time API calls if needed)
        let collectedCount = 520;
        let repurposedCount = 420;
        let contribution = ((repurposedCount / collectedCount) * 100).toFixed(2);

        // Update Dashboard Data
        collectedBatteries.innerHTML = `${collectedCount} Batteries Collected`;
        repurposedBatteries.innerHTML = `${repurposedCount} Batteries Repurposed`;
        contributionPercentage.innerHTML = `${contribution}% Contribution to Sustainability`;
    }

    // Navigation Highlight
    const currentLocation = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});
// Smooth Scroll and Section Animation
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function checkVisibility() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add("visible");
            }
        });
    }

    // Check sections on scroll
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
// Modal Logic for Form Submission
const formModal = document.getElementById("formModal");
const closeBtn = document.querySelector(".close");

function showModal() {
    formModal.style.display = "flex";
}

// Close modal when clicking X
closeBtn.onclick = function () {
    formModal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target === formModal) {
        formModal.style.display = "none";
    }
}

// Trigger modal after form submission
const form = document.querySelector("#collectionForm");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission
    showModal(); // Show modal on submit
});
