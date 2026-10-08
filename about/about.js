 function toggleMenu() {
            document.getElementById("navMenu").classList.toggle("active");
        }

        function revealOnScroll() {
            let reveals = document.querySelectorAll(".reveal");

            reveals.forEach((element) => {
                let windowHeight = window.innerHeight;
                let elementTop = element.getBoundingClientRect().top;
                let visiblePoint = 100;

                if (elementTop < windowHeight - visiblePoint) {
                    element.classList.add("active");
                }
            });
        }

        window.addEventListener("scroll", revealOnScroll);