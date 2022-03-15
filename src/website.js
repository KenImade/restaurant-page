import bgImg from './assets/bg-img.jpg';
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
    // homeBtn.onclick(loadHome());

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("btn-nav");
    menuBtn.textContent = "Menu";
    // menuBtn.onclick(loadMenu());

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("btn-nav");
    contactBtn.textContent = "Contact Us";
    // contactBtn.onclick(loadContact());

    links.appendChild(homeBtn);
    links.appendChild(menuBtn);
    links.appendChild(contactBtn);

    header.appendChild(logoDiv);
    header.appendChild(links);

    return header;
};

function createMain() {
    const main = document.createElement("div");

    main.appendChild(createFirstSection());
    // main.appendChild(createSecondSection());

    return main
};

function createFirstSection() {
    const firstSection = document.createElement("section");
    firstSection.classList.add("first-section");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const heading = document.createElement("h2");
    heading.textContent = "Coffee Shop";
    heading.classList.add("title");

    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a felis vitae dolor egestas fermentum. Cras tempor diam nunc, id consectetur nulla fringilla euismod. Integer gravida lobortis felis eu pharetra. Phasellus nec eros ac lorem tempor varius in quis tellus. Ut tempor placerat arcu scelerisque interdum. In hac habitasse platea dictumst. Maecenas commodo non arcu a placerat. Nullam in fringilla libero.";

    const learnMoreBtn = document.createElement("button");
    learnMoreBtn.textContent = "Learn More";

    cardDiv.appendChild(heading);
    cardDiv.appendChild(paragraph);
    cardDiv.appendChild(learnMoreBtn);

    const img = new Image();
    img.src = bgImg;
    img.classList.add("center-fit");
   
    firstSection.appendChild(cardDiv);
    firstSection.appendChild(img);

    return firstSection;
};

function createSecondSection() {
    const title = document.createElement("h4");

    let headerList = ["01 Friendly Place", "02 FEEL THE COFFEE", ""]

};

function createCard() {

}


function createFooter() {

};

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    // content.appendChild(createFooter());

};

export default initializeWebsite;