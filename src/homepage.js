export const contentDiv = document.getElementById("#content");
export const headline = document.createElement("h1");
export const img = document.createElement("img");
export const desc = document.createElement("p");

img.src = "mff.jpg";
headline.textContent = "Uncle Moe's Family Feedbag";
desc.textContent = "At Uncle Moe's Family Feedbag, we'll get you fat, and loving it!"

contentDiv.appendChild("headline");
contentDiv.appendChild("img");
contentDiv.appendChild("desc");