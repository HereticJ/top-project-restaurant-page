export const headline = document.createElement("h1");
export const homeBtn = document.querySelector("#home");
export const desc = document.createElement("p");
import { image } from "./index.js";

homeBtn.addEventListener("click", homepage);
function homepage() {
    const rmContent = document.querySelector("#content");
    while (rmContent.firstChild) {
        rmContent.removeChild(rmContent.lastChild);
    }
    content.appendChild(headline);
    content.appendChild(desc);
    content.appendChild(image);
};

headline.textContent = "Uncle Moe's Family Feedbag";
desc.textContent = "Come to Uncle Moe's for family fun, it's good good good good, good good good!"

content.appendChild(headline);
content.appendChild(desc);

