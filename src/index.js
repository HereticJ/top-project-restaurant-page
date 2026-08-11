import { headline, desc } from "./homepage.js";
import { menuBtn } from "./menu.js";
import mff from "./mff.jpg";

const content = document.querySelector("#content");
export const image = document.createElement("img");
image.src = mff;

document.body.appendChild(image);

const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

console.log("Is this working yet?");
