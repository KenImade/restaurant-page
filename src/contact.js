function createContactTitle() {
    const contactHeading = document.createElement("div");
    contactHeading.classList.add("contact-heading");
    const contactTitle = document.createElement("p");
    contactTitle.textContent = "Contact Us";

    contactHeading.appendChild(contactTitle);
    return contactHeading;
};


function createContactPage() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    contact.appendChild(createContactTitle());

    return contact;
};

export default createContactPage;