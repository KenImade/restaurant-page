import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';
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
    document.body.innerHTML = "";

    document.body.appendChild(createHeader());
    document.body.appendChild(createHomePage());
    document.body.appendChild(createFooter());
};

function loadMenu() {
    document.body.innerHTML = "";

    document.body.appendChild(createHeader());
    document.body.appendChild(createMenuPage());
    document.body.appendChild(createFooter());
};

function loadContact() {
    document.body.innerHTML = "";

    document.body.appendChild(createHeader());
    document.body.appendChild(createContactPage());
    document.body.appendChild(createFooter());
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
    document.body.appendChild(createHeader());
    document.body.appendChild(createHomePage());
    document.body.appendChild(createFooter());
};

export default initializeWebsite;