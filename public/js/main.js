window.addEventListener("load", () => {
  document.querySelector(".copyright").innerHTML = `Copyright by Wizi © 2022 - ${new Date().getFullYear()}`;
})

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
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