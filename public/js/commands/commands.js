const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggle.classList.toggle("bx-x");
    });
  }
};
showMenu("header-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


const filtercategory = document.querySelector(".categorys");
const commands = document.querySelector(".commands")

let html = ""
let command = document.createElement("div");

import commandsData from "./commands.json" assert { type: "json" };

commandsData.forEach(commandData => {
  html = `
    <div class="command" data-name="${commandData.type}"> 
        <h2>${commandData.title}</h2><span>
            <div class="cmdinfo">
                <p>${commandData.description}</p>
            </div>
            <div class="cmduse">
                <p>Usage: ${commandData.usage}</p>
            </div>
        </span>
    </div>
    `;

    command = document.createElement("div");
    command.innerHTML = html;

    commands.appendChild(command);

    const filterImg = document.querySelectorAll(".commands .command");

    filtercategory.onclick = (selectedcategory) => {
      if (selectedcategory.target.classList.contains("category")) {
        filtercategory.querySelector(".active").classList.remove("active");
        selectedcategory.target.classList.add("active");
        let filterName = selectedcategory.target.getAttribute("data-name");
        filterImg.forEach((command) => {
          let filterImges = command.getAttribute("data-name");
          if (filterImges == filterName || filterName == "all") {
            command.classList.remove("hide");
            command.classList.add("show");
          } else {
            command.classList.add("hide");
            command.classList.remove("show");
          }
        });
      }
    };
    for (let i = 0; i < filterImg.length; i++) {
      filterImg[i].setAttribute("onclick", "preview(this)");
    }
  
  
  function preview(element) {
    let selectedPrevImg = element.querySelector("img").src;
    let selectedImgCategory = element.getAttribute("data-name");
    previewImg.src = selectedPrevImg;
    categoryName.textContent = selectedImgCategory;
    previewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcon.onclick = () => {
      previewBox.classList.remove("show");
      shadow.classList.remove("show");
      document.querySelector("body").style.overflow = "auto";
    };
  }
})   