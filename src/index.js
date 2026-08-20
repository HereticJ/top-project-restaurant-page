import "./styles.css";
import { headline, desc, content, image } from "./homepage.js";
import { meals, mealsTitle, hotDog, deepFried, fish, drinks, drinksTitle,
     beer1, beer2, wine1, wine2, cola1, cola2, sides, sidesTitle, chipsTitle,
     friesTitle, chiliTitle, wingsTitle, pizzaTitle, spaghettiTitle, desserts, dessertsTitle } 
     from "./menu.js";

// Initializes tab buttons.
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

// Removes homepage elements from page and switches to menu tab.
function removeTab() {
    const rmContent = document.querySelector("#content");
        while (rmContent.firstChild) {
            rmContent.removeChild(rmContent.lastChild);
        };
};

// Returns homepage when clicked.
homeBtn.addEventListener("click", homePage);
    function homePage() {
        removeTab();
        content.appendChild(headline);
        content.appendChild(image);
        content.appendChild(desc);
    };

// Switches to Menu tab when clicked.
menuBtn.addEventListener("click", menuPage);
    function menuPage() {
        removeTab();
        menuContents();
    };

// Switches to About tab when clicked.
aboutBtn.addEventListener("click", aboutPage);
    function aboutPage() {
        removeTab();
    };

// Removes content from current tab and loads in Homepage content.
function homeContents() {
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(desc);
}

// Fills menu tab with menu content.
function menuContents() {
    // Appends sides to DOM.
    sides.appendChild(sidesTitle);
        content.appendChild(sides);
            sides.appendChild(chipsTitle);
            sides.appendChild(friesTitle);
            sides.appendChild(chiliTitle);
            sides.appendChild(wingsTitle);
            sides.appendChild(pizzaTitle);
            sides.appendChild(spaghettiTitle);

    // Adds menu title and lists meals.
    meals.appendChild(mealsTitle);
        meals.appendChild(hotDog);
        meals.appendChild(deepFried);
        meals.appendChild(fish);
            content.appendChild(meals);

    // Appends drinks to DOM.
    drinks.appendChild(drinksTitle);
        content.appendChild(drinks);
            drinks.appendChild(beer1);
            drinks.appendChild(beer2);
            drinks.appendChild(wine1);
            drinks.appendChild(wine2);
            drinks.appendChild(cola1);
            drinks.appendChild(cola1);
        
    // Appends desserts to DOM.
    desserts.appendChild(dessertsTitle);
        content.appendChild(desserts);
};

console.log("Is this working yet?");
