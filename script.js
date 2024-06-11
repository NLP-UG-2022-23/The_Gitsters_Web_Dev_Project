        function darkMode() {
            let element = document.body;
            element.className = "dark-mode";
            document.getElementById("btn").onclick = lightMode;
            document.getElementById('img_mode').src = 'light.png'
            document.getElementById("btn").innerText = 'Light Mode';
            document.getElementById('about').id = 'darkabout';
            document.getElementById('btn').id = 'darkbtn';
        }
        function lightMode() {
            let element = document.body;
            element.className = "light-mode";
            document.getElementById("darkbtn").onclick = darkMode;
            document.getElementById('img_mode').src = 'dark.png'
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

        
        let lastScrollTop = 0;

        window.addEventListener("scroll", function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
            
            if (window.matchMedia("(max-width: 768px)").matches) {
                if (currentScroll > lastScrollTop) {
                    document.getElementById("navbar").style.top = "-100%";
                } else {
                    document.getElementById("navbar").style.top = "0";
                }
            } else {
                document.getElementById("navbar").style.top = "0";
            }
        
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }, false);
        
