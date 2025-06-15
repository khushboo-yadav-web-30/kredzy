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
});