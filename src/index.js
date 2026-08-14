import { headline, desc } from "./homepage.js";
import { menuBtn } from "./menu.js";
import "./styles.css";
import mff2 from "./mff2.jpg";

export const content = document.querySelector("#content");
export const image = document.createElement("img");
image.src = mff2;

content.appendChild(headline);
content.appendChild(image);
content.appendChild(desc);


headline.textContent = "Uncle Moe's Family Feedbag";
desc.textContent = "Come to Uncle Moe's for family fun, it's good good good good, good good good!"

const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

console.log("Is this working yet?");
