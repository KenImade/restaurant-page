import bgImg from './assets/bg-img.jpg';
import cardImgOne from './assets/card-img-one.jpg';
import cardImgTwo from './assets/card-img-two.jpg';
import cardImgThree from './assets/card-img-three.jpg';
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
    main.appendChild(createSecondSection());

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
    const secondSection = document.createElement("section");
    secondSection.classList.add("second-section");

    const title = document.createElement("h2");
    title.textContent = "Coffee Build Your Base";
    title.classList.add("second-section-title");

    secondSection.appendChild(title);

    let cardSection = document.createElement("div");
    cardSection.classList.add("card-section");

    let headerList = ["01 FRIENDLY PLACE", "02 FEEL THE COFFEE", "03 FULL TASTE"];
    for (let i=0; i < headerList.length; i++) {
        let card = createCard(headerList[i], i);
        cardSection.appendChild(card);
    }

    secondSection.appendChild(title);
    secondSection.appendChild(cardSection);

    return secondSection;
};

function createCard(title, i) {
    let images = [cardImgOne,cardImgTwo,cardImgThree];
    const card = document.createElement("div");
    card.classList.add("info-card");
    let cardImage = document.createElement("img");
    let cardImageDiv = document.createElement("div");
    cardImageDiv.appendChild(cardImage);
    cardImage.classList.add("card-img");
    let cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title")
    let cardText = document.createElement("div");
    cardText.classList.add("card-text");
    
    cardTitle.textContent = title;
    cardImage.src = images[i];
    cardText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a felis vitae dolor egestas fermentum. Cras tempor diam nunc, id consectetur nulla fringilla euismod."

    card.appendChild(cardImageDiv);
    card.appendChild(cardTitle);
    card.appendChild(cardText);

    return card;
}


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
    content.appendChild(createMain());
    content.appendChild(createFooter());
};

export default initializeWebsite;