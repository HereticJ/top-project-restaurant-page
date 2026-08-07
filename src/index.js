import { contentDiv, headline, desc } from "./homepage.js"
import mff from "./mff.jpg";

const image = document.createElement("img");
image.src = mff;

document.body.appendChild(image);

const menu = document.querySelector("#menu");
const about = document.querySelector('#about');

menu.addEventListener("click", checkMenu());
    function checkMenu() {
        contentDiv.removeChild(headline);
        contentDiv.removeChild(desc);
        document.body.removeChild(image);
    };

console.log("Is this working yet?");
