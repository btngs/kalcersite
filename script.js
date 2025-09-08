    const starsContainer = document.querySelector(".stars");
    const colors = ["#cc00ff", "#6600ff", "#0033ff", "#00ccff", "#00ffcc"];
    
    for (let i = 0; i < 20; i++) { 
        const star = document.createElement("span");
        const size = Math.random() * 6 + 2; 
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.color = star.style.backgroundColor;
        star.style.animationDelay = Math.random() * 5 + "s";
        starsContainer.appendChild(star);
      }

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
    const menuIcon = document.querySelector("i");

    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("show");
      menuToggle.classList.toggle("active");

      if (navbar.classList.contains("show")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
      } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
      }
    });
