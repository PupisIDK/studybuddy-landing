// BURGER MENU

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// SMOOTH SCROLL

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (targetId.length > 1) {
            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                nav.classList.remove("active");
            }
        }
    });
});

// MODAL

const modal = document.querySelector(".modal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");

const featureButtons = document.querySelectorAll(".feature-more");
const modalClose = document.querySelector(".modal__close");

featureButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const title = button.dataset.title;
        const text = button.dataset.text;

        modalTitle.textContent = title;
        modalText.textContent = text;

        modal.classList.add("active");
    });
});

// CLOSE BUTTON

modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
});

// CLOSE BY BACKGROUND

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});


// FORM VALIDATION

const form = document.querySelector("#registrationForm");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const formMessage = document.querySelector(".form-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" || email === "") {
        formMessage.textContent =
            "Пожалуйста, заполните все поля.";

        formMessage.classList.add("error");
        formMessage.classList.remove("success");

        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent =
            "Введите корректный email.";

        formMessage.classList.add("error");
        formMessage.classList.remove("success");

        return;
    }

    formMessage.textContent =
        "Регистрация успешно выполнена!";

    formMessage.classList.add("success");
    formMessage.classList.remove("error");

    form.reset();
});


// SCROLL ANIMATION

const revealElements = document.querySelectorAll(
    ".feature-card, .benefit-card, .review-card, .registration__form, .final-cta__inner"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
