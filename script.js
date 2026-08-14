// script.js

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const location = document.getElementById("location").value;
    const pickupDate = document.getElementById("pickupDate").value;
    const returnDate = document.getElementById("returnDate").value;
    const carType = document.getElementById("carType").value;

    if (!location || !pickupDate || !returnDate) {
        alert("Please enter location, pick-up date and return date.");
        return;
    }

    if (new Date(returnDate) < new Date(pickupDate)) {
        alert("Return date cannot be before pick-up date.");
        return;
    }

    const cars = document.querySelectorAll(".car-card");

    cars.forEach(car => {
        if (carType === "all" || car.dataset.type === carType) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }
    });

    document.getElementById("cars").scrollIntoView({
        behavior: "smooth"
    });

});


const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        const carName =
            button.closest(".car-card").querySelector("h3").textContent;

        alert(
            "You selected " +
            carName +
            ". Booking functionality can be added next."
        );

    });

});