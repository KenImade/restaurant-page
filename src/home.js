import bgImg from './assets/bg-img.jpg';
import cardImgOne from './assets/card-img-one.jpg';
import cardImgTwo from './assets/card-img-two.jpg';
import cardImgThree from './assets/card-img-three.jpg';


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
};

function createHomePage() {
    const home = document.createElement("div");

    home.appendChild(createFirstSection());
    home.appendChild(createSecondSection());

    return home;
}

export default createHomePage;