import telImg from './assets/telephone-call.png';
import mailImg from './assets/mail.png';
import locationImg from './assets/address.png';

function createContactTitle() {
    const contactHeading = document.createElement("div");
    contactHeading.classList.add("contact-heading");
    const contactTitle = document.createElement("div");
    contactTitle.textContent = "Contact Us";

    contactHeading.appendChild(contactTitle);

    return contactHeading;
};

function createContactInfo() {
    const contactInfoDiv = document.createElement("div");
    contactInfoDiv.classList.add("contact-info");

    const contactInfoHeading = document.createElement("h3");
    contactInfoHeading.textContent = "Get in touch with us!";
    contactInfoDiv.appendChild(contactInfoHeading);

    const contactCards = document.createElement("div");
    contactCards.classList.add("contact-cards");
   
    
    contactCards.appendChild(createPhoneDiv());
    contactCards.appendChild(createAddressDiv());
    contactCards.appendChild(createEmailDiv());

    contactInfoDiv.appendChild(contactInfoHeading);
    contactInfoDiv.appendChild(contactCards);

    return contactInfoDiv;
};

function createAddressDiv() {
    const addressDiv = document.createElement("div");
    addressDiv.classList.add("contact-div", "bd-r");

    const addressImg = document.createElement("img");
    addressImg.src = locationImg;
    addressDiv.appendChild(addressImg);

    const addressHeading = document.createElement("div");
    addressHeading.textContent = "ADDRESS";
    addressDiv.appendChild(addressHeading);

    const addressText = document.createElement("p");
    addressText.textContent = "No 1 Coffee Street, Lagos, Nigeria";
    addressDiv.appendChild(addressText);

    return addressDiv;
};

function createEmailDiv() {
    const emailDiv = document.createElement("div");
    emailDiv.classList.add("contact-div");

    const emailImg = document.createElement("img");
    emailImg.src = mailImg;
    emailDiv.appendChild(emailImg);

    const emailHeading = document.createElement("div");
    emailHeading.textContent= "EMAIL";
    emailDiv.appendChild(emailHeading);

    const emailTextOne = document.createElement("p");
    emailTextOne.textContent = "support@goodcoffee.com";
    emailDiv.appendChild(emailTextOne);

    const emailTextTwo = document.createElement("p");
    emailTextTwo.textContent = "orders@goodcoffee.com";
    emailDiv.appendChild(emailTextTwo);

    return emailDiv;
};

function createPhoneDiv() {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("contact-div", "bd-r");
    
    const phoneImg = document.createElement("img");
    phoneImg.src = telImg;
    phoneDiv.appendChild(phoneImg);

    const phoneHeading = document.createElement("div");
    phoneHeading.textContent= "PHONE";
    phoneDiv.appendChild(phoneHeading);

    const phoneTextOne = document.createElement("p");
    phoneTextOne.textContent = "+1 000 000 000";
    phoneDiv.appendChild(phoneTextOne);

    const phoneTextTwo = document.createElement("p");
    phoneTextTwo.textContent = "+1 000 000 000";
    phoneDiv.appendChild(phoneTextTwo);

    return phoneDiv;
};




function createContactPage() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    contact.appendChild(createContactTitle());
    contact.appendChild(createContactInfo());


    return contact;
};

export default createContactPage;