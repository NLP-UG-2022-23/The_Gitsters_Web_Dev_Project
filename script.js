        function darkMode() {
            let element = document.body;
            element.className = "dark-mode";
            document.getElementById("btn").onclick = lightMode;
            document.getElementById("btn").innerText = "Light Mode";
            document.getElementById('about').id = 'darkabout';
            document.getElementById('btn').id = 'darkbtn';
        }
        function lightMode() {
            let element = document.body;
            element.className = "light-mode";
            document.getElementById("darkbtn").onclick = darkMode;
            document.getElementById("darkbtn").innerText = "Dark Mode";
            document.getElementById('darkabout').id = 'about';
            document.getElementById('darkbtn').id = 'btn';
        }

        document.querySelector('.hamburger').addEventListener('click', function() {
            const links = document.querySelectorAll('#navbar a');
            for (let link of links) {
                link.style.display = link.style.display === 'block' ? 'none' : 'block';
            }
        });

        
        let lastScrollTop = 0; // Keep track of the last scroll position

        window.addEventListener("scroll", function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
            // Only apply the behavior for screens 768px wide or less
            if (window.matchMedia("(max-width: 768px)").matches) {
                if (currentScroll > lastScrollTop) {
                    // Scrolling down
                    document.getElementById("navbar").style.top = "-100%"; // Adjust this value based on your navbar's height
                } else {
                    // Scrolling up
                    document.getElementById("navbar").style.top = "0";
                }
            } else {
                // Optional: Reset navbar position for wider screens in case it's been hidden
                document.getElementById("navbar").style.top = "0";
            }
        
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
        }, false);
        
