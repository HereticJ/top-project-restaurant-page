import { contentDiv, headline, desc } from "./homepage.js";
import mff from "./mff.jpg";

const content = document.querySelector("#content");
const image = document.createElement("img");
image.src = mff;

document.body.appendChild(image);

const menu = document.querySelector("#menu");


menu.addEventListener("click", checkMenu);
    function checkMenu() {
        content.removeChild(headline);
        content.removeChild(desc);
        document.body.removeChild(image);
    };

console.log("Is this working yet?");
