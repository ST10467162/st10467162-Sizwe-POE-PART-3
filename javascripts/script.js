document.addEventListener("DOMContentLoaded", function () {

    // SERVICES PAGE SEARCH

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {

            let filter = searchInput.value.toLowerCase();
            let cards = document.querySelectorAll(".service-card");

            cards.forEach(card => {

                let text = card.textContent.toLowerCase();

                if (text.includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });
    }

    // FAQ ACCORDION

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(button => {

        button.addEventListener("click", function () {

            let panel = this.nextElementSibling;

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }

        });

    });

    // GALLERY LIGHTBOX

    const galleryImages = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (lightbox && lightboxImg) {

        galleryImages.forEach(img => {

            img.addEventListener("click", function () {

                lightbox.style.display = "flex";
                lightboxImg.src = this.src;

            });

        });

        lightbox.addEventListener("click", function () {

            lightbox.style.display = "none";

        });

    }

    // CONTACT FORM VALIDATION

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            let name = document.getElementById("contactName").value.trim();
            let email = document.getElementById("contactEmail").value.trim();
            let phone = document.getElementById("contactPhone").value.trim();
            let message = document.getElementById("contactMessage").value.trim();
            let error = document.getElementById("contactError");

            error.textContent = "";

            if (name.length < 3) {
                e.preventDefault();
                error.textContent = "Please enter a valid name.";
                return;
            }

            if (!email.includes("@")) {
                e.preventDefault();
                error.textContent = "Please enter a valid email.";
                return;
            }

            if (phone.length < 10) {
                e.preventDefault();
                error.textContent = "Please enter a valid phone number.";
                return;
            }

            if (message.length < 10) {
                e.preventDefault();
                error.textContent = "Message must be at least 10 characters.";
                return;
            }

            alert("Message submitted successfully.");

        });

    }

    // ENQUIRY FORM VALIDATION

    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (e) {

            let name = document.getElementById("enquiryName").value.trim();
            let email = document.getElementById("enquiryEmail").value.trim();
            let phone = document.getElementById("enquiryPhone").value.trim();
            let service = document.getElementById("serviceType").value;
            let urgency = document.getElementById("urgency").value;
            let message = document.getElementById("enquiryMessage").value.trim();
            let error = document.getElementById("enquiryError");

            error.textContent = "";

            if (name.length < 3) {
                e.preventDefault();
                error.textContent = "Please enter your full name.";
                return;
            }

            if (!email.includes("@")) {
                e.preventDefault();
                error.textContent = "Please enter a valid email address.";
                return;
            }

            if (phone.length < 10) {
                e.preventDefault();
                error.textContent = "Please enter a valid phone number.";
                return;
            }

            if (service === "") {
                e.preventDefault();
                error.textContent = "Please select a service.";
                return;
            }

            if (urgency === "") {
                e.preventDefault();
                error.textContent = "Please select an urgency level.";
                return;
            }

            if (message.length < 10) {
                e.preventDefault();
                error.textContent = "Please describe the problem.";
                return;
            }

            alert("Enquiry submitted successfully.");

        });

    }

});