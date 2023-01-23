window.addEventListener("load", () => {
  document.querySelector(".copyright").innerHTML = `Copyright by Wizi © 2022 - ${new Date().getFullYear()}`

})

window.addEventListener("scroll", reveal);

let isAnimate = false

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");

      if (reveals[i].children[0].children[0].innerText === "Stats" && isAnimate === false) {
        
      isAnimate = true
      }
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
