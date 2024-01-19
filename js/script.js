const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const navButtonEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
navButtonEl.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");

  if (headerEl.classList.contains("nav-open")) {
    document.documentElement.style.overflow = "hidden";
    return;
  }

  document.documentElement.style.overflow = "visible";
});

const allNavLinksEl = document.querySelectorAll(".main-nav-link");
allNavLinksEl.forEach((element) => {
  element.addEventListener("click", (e) => {
    headerEl.classList.remove("nav-open");
    document.documentElement.style.overflow = "visible";
  });
});

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
