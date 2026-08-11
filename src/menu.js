import { headline, desc } from "./homepage.js";
import { image } from "./index.js";
export { menuBtn, menuHeadline, beverages, sides, meals, desserts };

const menuHeadline = document.createElement("h1");
const meals = document.createElement("h2");
const beverages = document.createElement("h2");
const sides = document.createElement("h2");
const desserts = document.createElement("h2");
const chickenFS = document.createElement("h4");
const burger = document.createElement("h4");
const clubSW = document.createElement("h4");
const beer1 = document.createElement("h4");
const beer2 = document.createElement("h4");
const wine1 = document.createElement("h4");
const wine2 = document.createElement("h4");
const cola1 = document.createElement("h4");
const cola2 = document.createElement("h4");
let description = document.createElement("p");


menuHeadline.textContent = "Menu";
meals.textContent = "Main Courses";
beverages.textContent = "Drinks";
sides.textContent = "Sides";
desserts.textContent = "Treats";

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", menuPage);
    function menuPage() {
        content.removeChild(headline);
        content.removeChild(desc);
        document.body.removeChild(image);
        content.appendChild(menuHeadline);
        menuHeadline.textContent = "Feedbag Favorites";
            content.appendChild(meals);
                meals.appendChild(chickenFS);
                meals.appendChild(burger);
                meals.appendChild(clubSW);
                    chickenFS.textContent = "Chicken Fried Steak";
                    burger.textContent = "Moe's Patty";
                    clubSW.textContent = "Club Sandwich";
            content.appendChild(beverages);
                beverages.appendChild(beer1);
                beverages.appendChild(beer2);
                beverages.appendChild(wine1);
                beverages.appendChild(wine2);
                beverages.appendChild(cola1);
                beverages.appendChild(cola1);
                    beer1.textContent = "Duff";
                    beer2.textContent = "Duff Lite";
                    wine1.textContent = "White Zinfandel";
                    wine2.textContent = "Red Zinfandel";
                    cola1.textContent = "Buzz Cola";
                    cola2.textContent = "Diet Buzz Cola";
        
        content.appendChild(sides);
        content.appendChild(desserts);
    };






