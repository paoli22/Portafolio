
    // Animación de entrada al hacer scroll
    document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll(".container");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.2 });

        sections.forEach(section => {
            section.style.opacity = 0;
            section.style.transform = "translateY(50px)";
            section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            observer.observe(section);
        });
    });

    // Validación del formulario de contacto
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector(".contact-form form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const name = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const message = form.querySelector("textarea").value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            if (!emailRegex.test(email)) {
                alert("Por favor, introduce un correo válido.");
                return;
            }

            alert("Mensaje enviado con éxito.");
            form.reset();
        });
    });
