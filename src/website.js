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
    let gitLink = document.createElement("a");
    gitLink.classList.add("link");
    gitLink.textContent = "Website created by Kenneth Imade";
    gitLink.href = "https://github.com/KenImade";
    footer.appendChild(gitLink);
    return footer;
};

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createHomePage());
    content.appendChild(createFooter());
};

export default initializeWebsite;