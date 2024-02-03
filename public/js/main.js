window.addEventListener("load", () => {
  document.getElementById("currentYear").innerHTML = new Date().getFullYear();
})

// =================
// Counter animation
// =================

fetch(`/stats`)
  .then(response => response.json())
  .then(data => {
    const createCounterElement = (icon, value, label) => {
      const counterColumn = document.createElement("div");
      counterColumn.className = "counter-flex__column";

      const valueElement = document.createElement("div");
      valueElement.className = "value";
      valueElement.setAttribute("data-from", "0");
      valueElement.setAttribute("data-to", value);
      valueElement.textContent = value;

      const iconElement = document.createElement("i");
      iconElement.className = icon;

      const labelElement = document.createElement("h2");
      labelElement.appendChild(iconElement);
      labelElement.appendChild(document.createTextNode(` ${label}`));

      counterColumn.appendChild(valueElement);
      counterColumn.appendChild(labelElement);

      return counterColumn;
    };

    const counters = document.querySelector(".counter-flex");

    counters.appendChild(createCounterElement("fas fa-server", data.server, "Servers"));
    counters.appendChild(createCounterElement("fas fa-terminal", data.commands, "Commands"));
    counters.appendChild(createCounterElement("fas fa-users", data.members, "Users"));

    document.querySelectorAll('.value').forEach(element => {
      countTo(parseInt(element.getAttribute('data-to')), 1500, element);
    });
  })
  .catch(err => {
    console.error("Error fetching guild count: ", err);
  });

function countTo(target, duration, element) {
  const countFrom = 0;
  const framesPerSecond = 60;
  const totalFrames = framesPerSecond * (duration / 1000);
  const increment = (target - countFrom) / totalFrames;

  let currentCount = countFrom;

  const counter = setInterval(function () {
    currentCount += increment;
    element.textContent = Math.round(currentCount);

    if (currentCount >= target) {
      element.textContent = target;
      clearInterval(counter);
    }
  }, 1000 / framesPerSecond);
}

// ================
// Reveal animation
// ================

window.addEventListener("scroll", reveal);

let wasAnimate = false
let wasActivate = true

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");


      var numberOfactive = Array.from(reveals).filter(function(element) {
        return element.className.endsWith("active")
      })

      if (numberOfactive.length >= 3) {
        if (wasActivate == wasAnimate) {
          wasActivate = !wasActivate
          if (wasActivate) {
            document.querySelectorAll('.value').forEach(element => {
              countTo(parseInt(element.getAttribute('data-to')), 1500, element);
            });
          }
        }
        wasAnimate = true
        
      } else {
        wasAnimate = false
        wasActivate = !wasActivate
      }
      
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function search() {
  const filterImg = document.querySelectorAll(".commands .command");
  const value = document.querySelector(".command-input__field").value.toLowerCase()


  filterImg.forEach((command) => {
    if (command.children[0].innerHTML.substring(1).includes(value)) {
      command.classList.remove("hide");
      command.classList.add("show");
    } else {
      command.classList.remove("show");
      command.classList.add("hide");
    }
    
  });
}