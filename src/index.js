import "./styles.css";
import { headline, desc, content, image } from "./homepage.js";
import { sides, meals, drinks } from "./menu.js";
import { about } from "./about.js";

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
        aboutContents();
    };

// Fills menu tab with menu content.
function menuContents() {
    // Appends sides to DOM.
    content.appendChild(sides);
    content.appendChild(meals)
    content.appendChild(drinks);
};

function aboutContents() {
    content.appendChild(about);
};

console.log("Is this working yet?");
