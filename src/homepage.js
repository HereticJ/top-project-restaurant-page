export const headline = document.createElement("h1");
export const desc = document.createElement("p");
export const content = document.querySelector("#content");
import mff from "./mff2.jpg";

export const image = document.createElement("img");
image.src = mff;

// Supplies text content for headline and description.
headline.textContent = "Uncle Moe's Family Feedbag";
desc.textContent = "Come to Uncle Moe's for family fun, it's good good good good, good good good!";

// Initializes homepage for first visit.
content.appendChild(headline);
content.appendChild(image);
content.appendChild(desc);
