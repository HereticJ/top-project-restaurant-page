// Describes menu items.

const chipsDesc = document.createElement("p");
const friesDesc = document.createElement("p");
const chiliDesc = document.createElement("p");
const wingsDesc = document.createElement("p");
const pizzaDesc = document.createElement("p");

chipsDesc.classList = "desc";
friesDesc.classList = "desc";
chiliDesc.classList = "desc";
wingsDesc.classList = "desc";
pizzaDesc.classList = "desc";

const chipsPic = document.createElement("img");
const friesPic = document.createElement("img");
const chiliPic = document.createElement("img");
const wingsPic = document.createElement("img");
const pizzaPic = document.createElement("img");

// Sides title, list of h3 elements for each entry, adds p descriptions.
export const sides = document.createElement("div#sides");
    export const sidesTitle = document.createElement("h2");
        sidesTitle.classList = "titles";
        sidesTitle.textContent = "Sides";
            export const chipsTitle = document.createElement("h3");
            export const friesTitle = document.createElement("h3");
            export const chiliTitle = document.createElement("h3");
            export const wingsTitle = document.createElement("h3");
            export const pizzaTitle = document.createElement("h3");
            chipsTitle.classList = "entries";
            friesTitle.classList = "entries";
            chiliTitle.classList = "entries";
            wingsTitle.classList = "entries";
            pizzaTitle.classList = "entries";
            
                chipsTitle.textContent = "Fiestaritos";
                chipsTitle.appendChild(chipsPic);
                chipsTitle.appendChild(chipsDesc);
                    chipsDesc.textContent = "Start your fiesta right with Moe's house-made tortilla chips and your choice of salsa."
                friesTitle.textContent = "Million Dollar Birthday Fries";
                friesTitle.appendChild(friesPic);
                friesTitle.appendChild(friesDesc);
                    friesDesc.textContent = "Please remember to remove the basket from Moe's head (it gets really hot)."
                chiliTitle.textContent = "Moe's Chicken Chili";
                chiliTitle.appendChild(chiliPic);
                chiliTitle.appendChild(chiliDesc);
                    chiliDesc.textContent = "Now free of offensive language!"
                wingsTitle.textContent = "Ranchy Wingy Thingys";
                wingsTitle.appendChild(wingsPic);
                wingsTitle.appendChild(wingsDesc);
                    wingsDesc.textContent = "You know, those things. The wings buffalo have."
                pizzaTitle.textContent = "Southwestern Pizza Fingers";
                pizzaTitle.appendChild(pizzaPic);
                pizzaTitle.appendChild(pizzaDesc);
                    pizzaDesc.textContent = "Who needs triangles when you can have fingers?"

// Meals title, list of h3 elements for each entry, adds p descriptions.
export const meals = document.createElement("div#meals");
    export const mealsTitle = document.createElement("h2");
    mealsTitle.classList = "titles";
        mealsTitle.textContent = "Main Courses";
            export const hotDog = document.createElement("h3");
            export const deepFried = document.createElement("h3");
            export const fish = document.createElement("h3");
            export const spaghettiTitle = document.createElement("h3");
            const spaghettiDesc = document.createElement("p");
            spaghettiDesc.classList = "desc";
            hotDog.classList = "entries";
            deepFried.classList = "entries";
            fish.classList = "entries";
            spaghettiTitle.classList = "entries";
                hotDog.textContent = "Amtrak-style Hot Dog";
                deepFried.textContent = "Deep-fried home-style meals";
                fish.textContent = "Guilt-Free Steakfish Filets";
                spaghettiTitle.textContent = "Spaghetti and Moe Balls";
                    spaghettiDesc.textContent = "Authentic Italian-style, home-style, noodles in tomato sauce with Moe's world famous mostly meat balls."

// Drinks title, list of h3 elements for each entry, adds p descriptions.
export const drinks = document.createElement("div#drinks");
    export const drinksTitle = document.createElement("h2");
    drinksTitle.classList = "titles";
        drinksTitle.textContent = "Drinks";
            export const beer1 = document.createElement("h4");
            export const beer2 = document.createElement("h4");
            export const wine1 = document.createElement("h4");
            export const wine2 = document.createElement("h4");
            export const cola1 = document.createElement("h4");
            export const cola2 = document.createElement("h4");
            beer1.classList = "entries";
            beer2.classList = "entries";
            wine1.classList = "entries";
            wine2.classList = "entries";
            cola1.classList = "entries";
            cola2.classList = "entries";
                beer1.textContent = "Duff";
                beer2.textContent = "Duff Lite";
                wine1.textContent = "White Zinfandel";
                wine2.textContent = "Red Zinfandel";
                cola1.textContent = "Buzz Cola";
                cola2.textContent = "Diet Buzz Cola";

// Desserts title, list of h3 elements for each entry, adds p descriptions.
export const desserts = document.createElement("div#desserts");
    export const dessertsTitle = document.createElement("h3");
    dessertsTitle.classList = "titles";
        dessertsTitle.textContent = "Desserts";
            export const donuts = document.createElement("h4");
            donuts.classList = "entries";






