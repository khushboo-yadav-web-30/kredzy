document.addEventListener("DOMContentLoaded", () => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

    // Login Modal
    const loginButton = document.getElementById("loginButton");
    const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));

    if (loginButton) {
        loginButton.addEventListener("click", (e) => {
            e.preventDefault();
            loginModal.show();
        });
    }

    // Password Toggle
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", () => {
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);
            togglePassword.querySelector("i").classList.toggle("fa-eye");
            togglePassword.querySelector("i").classList.toggle("fa-eye-slash");
        });
    }

    // Scroll to top button functionality
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (scrollToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.add("active");
            } else {
                scrollToTopButton.classList.remove("active");
            }
        });

        scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }

    // Section fade-in animation on scroll
    document.querySelectorAll("section").forEach(sec => sec.classList.add("section-animate"));

    const observer = new window.IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".section-animate").forEach(sec => observer.observe(sec));

    document.body.classList.add('page-loaded');
});
