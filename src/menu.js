import chips from "./chips.png";
import fries from "./fries.jpg";
import chili from "./chili.jpg";
import pizza from "./pizza.jpg";
import wings from "./wings.jpg";

// Sides title, list of h3 elements for each entry, adds p descriptions.
export const sides = document.createElement("div");
sides.classList = "sides";
    const sidesHeader = document.createElement("h2");
        sidesHeader.classList = "header";
        sidesHeader.textContent = "Sides";
        
    export const chipsDiv = document.createElement("div");
    export const chipsPic = document.createElement("img");
    chipsPic.src = chips;
    chipsDiv.classList = "sides";
        const chipsTitle = document.createElement("h3");
        const chipsDesc = document.createElement("p");
        chipsDiv.classList = "sides";
        chipsDesc.classList = "desc";
        chipsTitle.classList = "entries";
            chipsTitle.textContent = "Fiestaritos";
            chipsDesc.textContent = "Start your fiesta right with Moe's house-made tortilla chips and your choice of salsa."
                chipsDiv.appendChild(chipsTitle);
                chipsDiv.appendChild(chipsPic);
                chipsDiv.appendChild(chipsDesc);
        
    export const friesDiv = document.createElement("div");
    export const friesPic = document.createElement("img");
    friesPic.src = fries;
    friesDiv.classList = "sides";
        const friesTitle = document.createElement("h3");
        const friesDesc = document.createElement("p");
        friesTitle.classList = "entries";
        friesDesc.classList = "desc";
            friesTitle.textContent = "Million Dollar Birthday Fries";
            friesDesc.textContent = "Please remember to remove the basket from Moe's head (it gets really hot)."
                friesDiv.appendChild(friesTitle);
                friesDiv.appendChild(friesPic);
                friesDiv.appendChild(friesDesc);        
                
    export const chiliDiv = document.createElement("div");
    export const chiliPic = document.createElement("img");
    chiliPic.src = chili;
    chiliDiv.classList = "sides";
        const chiliTitle = document.createElement("h3");
        const chiliDesc = document.createElement("p");
        chiliTitle.classList = "entries";
        chiliDesc.classList = "desc";
            chiliTitle.textContent = "Moe's Chicken Chili";
            chiliDesc.textContent = "Now with less offensive language!";
                chiliDiv.appendChild(chiliTitle);
                chiliDiv.appendChild(chiliPic);
                chiliDiv.appendChild(chiliDesc);
    
    export const wingsDiv = document.createElement("div");
    export const wingsPic = document.createElement("img");
    wingsPic.src = wings;
    wingsDiv.classList = "sides";
        const wingsTitle = document.createElement("h3");
        const wingsDesc = document.createElement("p");
        wingsTitle.classList = "entries";
        wingsDesc.classList = "desc";
            wingsTitle.textContent = "Ranchy Wingy Thingys";
            wingsDesc.textContent = "Made with up to 30% real buffalo!"
                wingsDiv.appendChild(wingsTitle);
                wingsDiv.appendChild(wingsPic);
                wingsDiv.appendChild(wingsDesc);
                            
    export const pizzaDiv = document.createElement("div");
    export const pizzaPic = document.createElement("img");
    pizzaPic.src = pizza;
    pizzaDiv.classList = "sides";
        const pizzaTitle = document.createElement("h3");
        const pizzaDesc = document.createElement("p");
            pizzaTitle.classList = "entries";
            pizzaDesc.classList = "desc";
                pizzaTitle.textContent = "Southwestern Pizza Fingers";
                pizzaDesc.textContent = "Who needs triangles when you can have rectangles? *Note: actual shapes may vary."
                    pizzaDiv.appendChild(pizzaTitle);
                    pizzaDiv.appendChild(pizzaPic);
                    pizzaDiv.appendChild(pizzaDesc);

sides.appendChild(chipsDiv);
sides.appendChild(friesDiv);
sides.appendChild(chiliDiv);
sides.appendChild(wingsDiv);
sides.appendChild(pizzaDiv);
        

// Meals title, list of h3 elements for each entry, adds p descriptions.
export const meals = document.createElement("div");
meals.classList = "meals";
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
export const drinks = document.createElement("div");
drinks.classList = "drinks";
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






