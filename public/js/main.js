window.addEventListener("load", () => {
  document.querySelector(".copyright").innerHTML = `Copyright by Wizi © 2022 - ${new Date().getFullYear()}`

})

window.addEventListener("scroll", reveal);

let wasAnimate = false

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

      console.log(counterLoad)

      if (numberOfactive.length >= 3 && wasAnimate == false) {
        wasAnimate = true
        let brk = 0
        
        while (brk < 1) {
          //console.log("uwu")
          if (counterLoad == true) {
            console.log
            $('.value').countTo({
              refreshInterval: 50,
              speed: 1500
            });
            brk = 1
          }
        }
        
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