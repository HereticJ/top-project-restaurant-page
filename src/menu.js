import { content } from "./homepage.js";
export { menuFill };

// Describes menu items.
let itemDesc = document.createElement("p");

// Meals title, list of h3 elements for each entry, adds p descriptions.
const meals = document.createElement("div#meals");
    const mealsTitle = document.createElement("h3");
        mealsTitle.textContent = "Main Courses";
            const chickenFS = document.createElement("h5");
            const burger = document.createElement("h5");
            const clubSW = document.createElement("h5");
                chickenFS.textContent = "Chicken Fried Steak";
                burger.textContent = "Patty 'n Selma";
                clubSW.textContent = "Club Sandwich";

// Drinks title, list of h3 elements for each entry, adds p descriptions.
const drinks = document.createElement("div#drinks");
    const drinksTitle = document.createElement("h3");
        drinksTitle.textContent = "Drinks";
            const beer1 = document.createElement("h5");
            const beer2 = document.createElement("h5");
            const wine1 = document.createElement("h5");
            const wine2 = document.createElement("h5");
            const cola1 = document.createElement("h5");
            const cola2 = document.createElement("h5");
                beer1.textContent = "Duff";
                beer2.textContent = "Duff Lite";
                wine1.textContent = "White Zinfandel";
                wine2.textContent = "Red Zinfandel";
                cola1.textContent = "Buzz Cola";
                cola2.textContent = "Diet Buzz Cola";

// Siodes title, list of h3 elements for each entry, adds p descriptions.
const sides = document.createElement("div#sides");
    const sidesTitle = document.createElement("h3");
        sidesTitle.textContent = "Sides";

// Desserts title, list of h3 elements for each entry, adds p descriptions.
const desserts = document.createElement("div#desserts");
    const dessertsTitle = document.createElement("h3");
        dessertsTitle.textContent = "Desserts";

// Fills menu tab with menu content.
function menuContents() {
    // Adds menu title and lists meals.
    meals.appendChild(mealsTitle);
        meals.appendChild(chickenFS);
        meals.appendChild(burger);
        meals.appendChild(clubSW);
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

    // Appends sides to DOM.
    sides.appendChild(sidesTitle);
        content.appendChild(sides);
        
    // Appends desserts to DOM.
    desserts.appendChild(dessertsTitle);
        content.appendChild(desserts);
};

const menuFill = menuContents();





