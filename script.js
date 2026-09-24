
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

    // Close mobile menu when link is clicked
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";

        });

    });
}



// RENTED CAR BUTTONS


const rentedButtons = document.querySelectorAll(".rented-btn");

rentedButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        alert("Sorry! This car is currently rented out.");

    });

});



// CAR SEARCH


const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function() {

        const searchValue =
            searchInput.value.toLowerCase().trim();

        const carCards =
            document.querySelectorAll(".car-card");

        carCards.forEach(function(card) {

            const carName =
                card.getAttribute("data-name").toLowerCase();

            if (carName.includes(searchValue)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// AUTO SELECT CAR FROM URL


const selectedCar = document.getElementById("selectedCar");

if (selectedCar) {

    const urlParams =
        new URLSearchParams(window.location.search);

    const carFromURL =
        urlParams.get("car");

    if (carFromURL) {

        selectedCar.value = carFromURL;

    }

}

//  Contact Form


const contactForm = document.getElementById("contactForm");
const contactFormMessage = document.getElementById("contactFormMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        contactFormMessage.textContent =
            "Thank you! Your message has been sent successfully.";

        contactFormMessage.style.color = "#2e7d32";

        contactForm.reset();

    });

}