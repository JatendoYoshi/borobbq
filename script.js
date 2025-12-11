// Fade-in on load
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Fade-out on link click
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        if (link.href.includes(".html")) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                document.body.style.opacity = 0;
                setTimeout(() => {
                    window.location = link.href;
                }, 400);
            });
        }
    });
});
