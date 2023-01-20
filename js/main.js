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

      if (reveals[i].children[0].children[0].innerText === "Collaborators" && isAnimate === false) {
        animate()
        isAnimate = true
      }
    } else {
      reveals[i].classList.remove("active");
    }
  }
}



fetch(`https://discord.com/api/v6/users/@me/guilds`, {
  headers: {
    'Authorization': `Bot ${BOT_TOKEN}`
  }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(`Your bot is in ${data.length} guilds.`);
})
.catch(err => {
    console.error("Error fetching guild count: ", err);
});