export const contentDiv = document.querySelector("div#content");
export const headline = document.createElement("h1");
export const desc = document.createElement("p");

headline.textContent = "Uncle Moe's Family Feedbag";
desc.textContent = "Come to Uncle Moe's for family fun, it's good good good good, good good good!"

contentDiv.appendChild(headline);
contentDiv.appendChild(desc);