const start = document.getElementById("start");
const start2 = document.getElementById("start2");
const header = document.querySelector("header");
const navigation = document.querySelectorAll("ul.navigation li a");
const image = header.querySelector("img");
const bar = document.querySelectorAll("span.bar");
const scrollTrigger = 1;
const originalImageSrc = "SVG/Logo_standard_transparent.svg";
const newImageSrc = "SVG/Logo_mod_transparent.svg";

const ml = { timelines: {} };
ml.timelines["ml5"] = anime
  .timeline({ loop: false })
  .add({
    targets: ".ml5 .line",
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700,
  })
  .add({
    targets: ".ml5 .line",
    duration: 600,
    easing: "easeOutExpo",
    translateY: function (e, i, l) {
      const offset = -0.625 + 0.625 * 2 * i;
      return offset + "em";
    },
  })
  .add({
    targets: ".ml5 .ampersand",
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=600",
  })
  .add({
    targets: ".ml5 .letters-left",
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=300",
  })
  .add({
    targets: ".ml5 .letters-right",
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=600",
  });

function loadTab(url, tabId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(
        "content"
      ).innerHTML = `<div id="${tabId}">${data}</div>`;
      if (tabId != "tab1") {
        start.style.display = "none";
        start2.style.display = "none";
      } else if (tabId === "tab1") {
        (start.style.display = "grid"), (start2.style.display = "grid");
      }
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
}

function checkClick() {
  if (loadTab()) {
    deletemessage.style.display = "none";
  }
}

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);

  if (window.scrollY > scrollTrigger) {
    image.src = newImageSrc;
    for (let i = 0; i < bar.length; i++) {
      bar[i].style.backgroundColor = "white";
    }
  } else if (window.scrollY === 0) {
    image.src = originalImageSrc;
    for (let i = 0; i < bar.length; i++) {
      bar[i].style.backgroundColor = "black";
    }
  }
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
const navigationLinks = document.getElementsByClassName("nav-link");

Array.from(navigationLinks).forEach(function (link, index) {
  link.addEventListener("click", function () {
    const footers = document.getElementsByClassName("stopka");
    Array.from(footers).forEach(function (footer) {
      footer.setAttribute("id", "footer-" + (index + 1));
    });
  });
});
