        function darkMode() {
            let element = document.body;
            element.className = "dark-mode";
            document.getElementById("btn").onclick = lightMode;
            document.getElementById('about').id = 'darkabout';
            document.getElementById('btn').id = 'darkbtn';
        }
        function lightMode() {
            let element = document.body;
            element.className = "light-mode";
            document.getElementById("darkbtn").onclick = darkMode;
            document.getElementById('darkabout').id = 'about';
            document.getElementById('darkbtn').id = 'btn';
        }