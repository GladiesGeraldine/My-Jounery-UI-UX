document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Animasi Muncul Saat Di-scroll (Intersection Observer)
    const fadeElements = document.querySelectorAll(".animate-scroll-fade");
    
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        scrollObserver.observe(element);
    });

    // 2. Highlight Menu Navigasi Aktif Sesuai Section Area
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // 3. Filter Sistem Pada Grid Projek Kecil
    const tabButtons = document.querySelectorAll(".tab-btn");
    const projectCards = document.querySelectorAll(".project-card");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || filterValue === cardCategory) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1) translateY(0)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95) translateY(10px)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    });

});