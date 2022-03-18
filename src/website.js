import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

import telImg from './assets/telephone-call.png';
import mailImg from './assets/mail.png';
import wpImg from './assets/whatsapp.png';
import fbImg from './assets/facebook.png';
import twitterImg from './assets/twitter.png';
import youtubeImg from './assets/youtube.png';
import './style.css';

function createHeader() {
    const header = document.createElement("header");

    const logoDiv = document.createElement("div");
    logoDiv.textContent = "GOODCOFFEE";
    logoDiv.classList.add("logo");

    const links = document.createElement("div");
    links.classList.add("links");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("btn-nav");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", ()=> {
        loadHome();
    });

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("btn-nav");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", () => {
        loadMenu();
    });

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("btn-nav");
    contactBtn.textContent = "Contact Us";
    contactBtn.addEventListener("click", () => {
        loadContact();
    });

    links.appendChild(homeBtn);
    links.appendChild(menuBtn);
    links.appendChild(contactBtn);

    header.appendChild(logoDiv);
    header.appendChild(links);

    return header;
};

function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.appendChild(createHeader());
    content.appendChild(createHomePage());
    content.appendChild(createFooter());
};

function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.appendChild(createHeader());
    content.appendChild(createMenuPage());
    content.appendChild(createFooter());
};

function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.appendChild(createHeader());
    content.appendChild(createContactPage());
    content.appendChild(createFooter());
};

function createFooter() {
    const footer = document.createElement("footer");
    const footerLinks = document.createElement("div");
    footerLinks.classList.add("footer-links");

    const contactLinks = document.createElement("div");
    const contactHeading = document.createElement("h3");
    contactHeading.textContent = "Contact";
    contactLinks.appendChild(contactHeading);
    contactLinks.classList.add("contact-links");

    const telDiv = document.createElement("div");
    telDiv.classList.add("contact-div");
    const phoneImg = document.createElement("img");
    const telParagraph = document.createElement("p");
    telParagraph.textContent = "09000000000";
    phoneImg.src = telImg;
    telDiv.appendChild(phoneImg);
    telDiv.appendChild(telParagraph);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("contact-div");
    const emailImg = document.createElement("img");
    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = "customercare@goodcoffee.com";
    emailImg.src = mailImg;
    emailDiv.appendChild(emailImg);
    emailDiv.appendChild(emailParagraph);

    const whatsappDiv = document.createElement("div");
    whatsappDiv.classList.add("contact-div");
    const whatsappImg = document.createElement("img");
    const whatsappParagraph = document.createElement("p");
    whatsappParagraph.textContent = "09000000000";
    whatsappImg.src = wpImg;
    whatsappDiv.appendChild(whatsappImg);
    whatsappDiv.appendChild(whatsappParagraph);
    

    contactLinks.appendChild(telDiv);
    contactLinks.appendChild(emailDiv);
    contactLinks.appendChild(whatsappDiv);

    const aboutUsLinks = document.createElement("div");
    aboutUsLinks.classList.add("about-div");
    const aboutUsHeading = document.createElement("h3");
    const aboutUsText = document.createElement("p");
    aboutUsHeading.textContent = "About us";
    aboutUsText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a felis vitae dolor egestas fermentum. Cras tempor diam nunc, id consectetur nulla fringilla euismod."
    aboutUsLinks.appendChild(aboutUsHeading);
    aboutUsLinks.appendChild(aboutUsText);

    const followUsLinks = document.createElement("div");
    followUsLinks.classList.add("follow-div");
    const followUsHeading = document.createElement("h3");
    followUsHeading.textContent = "Follow Us";
    followUsLinks.appendChild(followUsHeading);
    const followImgDiv = document.createElement("div");
    const faceImg = document.createElement("img");
    faceImg.src = fbImg;
    followImgDiv.appendChild(faceImg);
    const tweetImg = document.createElement("img");
    tweetImg.src = twitterImg;
    followImgDiv.appendChild(tweetImg);
    const youTubeImg = document.createElement("img");
    youTubeImg.src = youtubeImg;
    followImgDiv.appendChild(youTubeImg);
    followUsLinks.appendChild(followImgDiv);

    footer.appendChild(contactLinks);
    footer.appendChild(aboutUsLinks);
    footer.appendChild(followUsLinks);

    return footer;
};

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createHomePage());
    content.appendChild(createFooter());
};

export default initializeWebsite;