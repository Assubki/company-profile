// Toggle menu visibility
function toggleMenu() {
    const menu = document.querySelector('nav.navbar ul');
    menu.classList.toggle('show');  // Toggle 'show' class on menu
}

// Scroll behavior for smooth transitions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
