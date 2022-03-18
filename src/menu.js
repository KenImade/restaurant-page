import americanoImg from './assets/americano.jpg';
import caffeLatteImg from './assets/caffe-latte.jpg';
import cappuccinoImg from './assets/cappuccino.jpg';
import caramelLatteImg from './assets/caramel-latte.jpg';
import espressoImg from './assets/espresso.jpg';
import machiatoImg from './assets/machiato.jpg';
import mochaLatteImg from './assets/mocha-latte.jpg';


function createMenuHeader() {
    const menuHeader = document.createElement("div");
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our Menu";
    menuHeader.classList.add("menu-title");

    menuHeader.appendChild(menuTitle);

    return menuHeader;
};

function createMenuList() {
    const menuList = document.createElement("div");
    menuList.classList.add("card-carousel");

    let productImages = [americanoImg, caffeLatteImg, cappuccinoImg, caramelLatteImg, espressoImg, machiatoImg, mochaLatteImg];
    let productName = ['Americano', 'Caffe Latte', 'Cappuccino', 'Caramel Latte', 'Espresso', 'Machiato', 'Mocha Latte'];
    let productPrice = ['$2.99','$3.00','$3.00','$3.00','$2.90','$2.90','$3.00'];

    for (let i = 0; i < productImages.length; i++) {
        menuList.appendChild(createCoffeeCard(productImages[i], productName[i], productPrice[i]));
    }
    
    return menuList;
};

function createCoffeeCard(img, name, price) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const imgBox = document.createElement("div");
    const productImg = document.createElement("img");
    productImg.src = img;
    imgBox.classList.add("imgBox");

    imgBox.appendChild(productImg);
    productCard.appendChild(imgBox);

    const contentBox = document.createElement("div");
    contentBox.classList.add("contentBx");
    const contentBoxHeading = document.createElement("h3");
    contentBoxHeading.textContent = name;
    const productPrice = document.createElement("h2");
    productPrice.classList.add("price");
    productPrice.textContent = price;
    const buyNowLink = document.createElement("a")
    buyNowLink.textContent = "Order Now";
    buyNowLink.href = "#";
    buyNowLink.classList.add("buy");

    contentBox.appendChild(contentBoxHeading);
    contentBox.appendChild(productPrice);
    contentBox.appendChild(buyNowLink);

    productCard.appendChild(contentBox);
    return productCard;
};

function createMenuPage() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(createMenuHeader());
    menu.appendChild(createMenuList());
    return menu;
};

export default createMenuPage;