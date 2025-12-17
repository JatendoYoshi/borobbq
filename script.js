// Fade-in when page loads
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Fade-out when clicking navigation links
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

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach(link => {
        if (link.href.includes(".html")) {
            link.addEventListener("click", e => {
                e.preventDefault();
                document.body.style.opacity = 0;
                setTimeout(() => {
                    window.location = link.href;
                }, 400);
            });
        }
    });
});
