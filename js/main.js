//скрол для меню
document.getElementById("main-info").onclick = function () {
  document.getElementById("chairs").scrollIntoView({ behavior: "smooth" });
};

//ссылки из header

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

//ссылки из footer

let footerLinks = document.querySelectorAll(".footer-item > a");
for (let i = 0; i < footerLinks.length; i++) {
  footerLinks[i].onclick = function () {
    document
      .getElementById(footerLinks[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

//валидация инпутов для отправки данных менеджеру

const helpInfo = document.querySelector(".help-form-inputs");
const helpText = document.querySelector(".help-form-text");
const helpButton = document.querySelector("#help-action");
const helpContent = document.querySelector("#helpText");
const person = document.querySelector("#name");
const phone = document.querySelector("#phone");
