import { headline, desc, content, image } from "./homepage.js";
import { menuFill } from "./menu.js";
import "./styles.css";

// Initializes tab buttons.
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

// Returns homepage when clicked.
homeBtn.addEventListener("click", homePage);
function homePage() {
    removeTab();
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(desc);
};

// Removes homepage elements from page and switches to menu tab.
function removeTab() {
    const rmContent = document.querySelector("#content");
        while (rmContent.firstChild) {
            rmContent.removeChild(rmContent.lastChild);
        };
};

// Switches to Menu tab when clicked.
menuBtn.addEventListener("click", menuPage);
    function menuPage() {
        removeTab();
        menuFill;
    };

// Switches to About tab when clicked.
menuBtn.addEventListener("click", aboutPage);
    function aboutPage() {
        removeTab();

    };

console.log("Is this working yet?");
