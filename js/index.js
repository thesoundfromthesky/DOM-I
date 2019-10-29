const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Nav Items
const [nav] = document.getElementsByTagName("nav");
const navItems = Array.from(nav.children);

navItems.forEach((e, i) => {
  e.textContent = siteContent["nav"][`nav-item-${i + 1}`];
  e.style.color = "green";
});

const item1 = document.createElement("a");
item1.textContent = "Home";
item1.style.color = "green";

const item2 = document.createElement("a");
item2.textContent = "Town";
item2.style.color = "green";

nav.prepend(item1);
nav.appendChild(item2);

// CTA text
const [ctaText] = document.getElementsByClassName("cta-text");

ctaText.children[0].style.wordSpacing = "200vw";
ctaText.children[0].textContent = siteContent["cta"].h1;
ctaText.children[1].textContent = siteContent["cta"].button;

// Top Content
const [topContent] = document.getElementsByClassName("top-content");

// Bottom Content
const [bottomContent] = document.getElementsByClassName("bottom-content");
const mainContent = [...topContent.children, ...bottomContent.children];

// injecting view model into elements
const content = Object.values(siteContent["main-content"]);
content.splice(4, 1);
mainContent.forEach((e, i) => {
  Array.from(e.children).forEach((e, j) => {
    e.textContent = content[i * 2 + j];
  });
});

//Contact 
const textNode = document.createTextNode("123 Way 456 Street");
const brTag = document.createElement("br");
const textNode2 = document.createTextNode("Somewhere, USA");

let contactText = document.getElementsByClassName("contact");
contactText[0].children[0].textContent = siteContent["contact"]["contact-h4"]
contactText[0].children[1].appendChild(textNode);
contactText[0].children[1].appendChild(brTag);
contactText[0].children[1].appendChild(textNode2);
contactText[0].children[2].textContent = siteContent["contact"]["phone"]
contactText[0].children[3].textContent = siteContent["contact"]["email"]

// Footer

let footerText = document.getElementsByTagName("footer");
footerText[0].textContent = siteContent["footer"]["copyright"];
