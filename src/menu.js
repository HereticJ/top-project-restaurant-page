import chips from "./chips.png";
import fries from "./fries.jpg";
import chili from "./chili.jpg";
import pizza from "./pizza.jpg";
import wings from "./wings.jpg";
import hotdog from "./hotdog.jpg";
import deepfried from "./deepfried.jpg";
import steakfish from "./steakfish.jpg";
import spaghetti from "./spaghetti.jpg";
import duff from "./duff.jpg";
import dufffancy from "./dufffancy.jpg";
import dufflite from "./dufflite.jpg";
import wine1 from "./wine1.jpg";
import wine2 from "./wine2.jpg";
import cola1 from "./cola1.jpg";
import cola2 from "./cola2.jpg";

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
            wingsDesc.textContent = "Made with up to 30% genuine* buffalo meat!"
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
                pizzaDesc.textContent = "Who needs triangles when you can have rectangles? *Note: actual geometry may vary."
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
    export const mealsHeader = document.createElement("h2");
        mealsHeader.classList = "header";
        mealsHeader.textContent = "Main Courses";

            export const hotDogDiv = document.createElement("div");
            export const hotDogPic = document.createElement("img");
            hotDogPic.src = hotdog
            hotDogDiv.classList = "meals";
                const hotDogTitle = document.createElement("h3");
                const hotDogDesc = document.createElement("p");
                hotDogTitle.classList = "entries";
                hotDogDesc.classList = "desc";
                    hotDogTitle.textContent = "Amtrak-style Hot Dog";
                    hotDogDesc.textContent = "Moe's world famous Amtrak-style Hot Dog";
                        hotDogDiv.appendChild(hotDogTitle);
                        hotDogDiv.appendChild(hotDogPic);
                        hotDogDiv.appendChild(hotDogDesc);
            
            export const deepFriedDiv = document.createElement("div");
            export const deepFriedPic = document.createElement("img");
            deepFriedPic.src = deepfried;
            deepFriedDiv.classList = "meals";
                const deepFriedTitle = document.createElement("h3");
                const deepFriedDesc = document.createElement("p");
                deepFriedTitle.classList = "entries";
                deepFriedDesc.classList = "desc";
                    deepFriedTitle.textContent = "Deep-fried home-style meals";
                    deepFriedDesc.textContent = "Enjoy your food/drinks/objects the American way (MFF LLC is not responsible for cardiovascular infarctions, always consult your doctor before consuming)."
                        deepFriedDiv.appendChild(deepFriedTitle);
                        deepFriedDiv.appendChild(deepFriedPic);
                        deepFriedDiv.appendChild(deepFriedDesc);

            export const fishDiv = document.createElement("div");
            export const fishPic = document.createElement("img");
            fishPic.src = steakfish;
            fishDiv.classList = "meals";
                const fishTitle = document.createElement("h3");
                const fishDesc = document.createElement("p");
                fishTitle.classList = "entries";
                fishDesc.classList = "desc";
                    fishTitle.textContent = "Guilt-Free Steakfish Filets";
                    fishDesc.textContent = "Packed with protein and artificial colors, this dish is so delicious, it feels like cheating on your diet! *Note: `Diet` in this context refers only to general consumption and is NOT meant to imply any nutritional value."
                        fishDiv.appendChild(fishTitle);
                        fishDiv.appendChild(fishPic);
                        fishDiv.appendChild(fishDesc);

            export const spaghettiDiv = document.createElement("div");
            export const spaghettiPic = document.createElement("img");
            spaghettiPic.src = spaghetti;
            spaghettiDiv.classList = "meals";
                const spaghettiTitle = document.createElement("h3");
                const spaghettiDesc = document.createElement("p");
                    spaghettiTitle.classList = "entries";
                    spaghettiDesc.classList = "desc";
                        spaghettiTitle.textContent = "Spaghetti and Moe Balls";
                        spaghettiDesc.textContent = "Authentic Italian-style, home-style, noodles in tomato sauce with Moe's world famous mostly meat balls.";
                            spaghettiDiv.appendChild(spaghettiTitle);
                            spaghettiDiv.appendChild(spaghettiPic);
                            spaghettiDiv.appendChild(spaghettiDesc);

// Drinks title, list of h3 elements for each entry, adds p descriptions.
export const drinks = document.createElement("div");
drinks.classList = "drinks";
    const drinksHeader = document.createElement("h2");
    drinksHeader.classList = "header";
    drinksHeader.textContent = "Drinks";

        export const beer1Div = document.createElement("div");
        export const beer1Pic = document.createElement("img");
        beer1Pic.src = duff;        
        beer1Div.classList = "drinks";
            const beer1Title = document.createElement("h4");
            const beer1Desc = document.createElement("p");
                beer1Title.classList = "entries";
                beer1Desc.classList = "desc";
                    beer1Title.textContent = "Duff";
                    beer1Desc.textContent = "The one and only Duff, served ice-cold.";

        export const beer2Div = document.createElement("div");
        export const beer2Pic = document.createElement("img");
        beer2Pic.src = dufflite;
        beer2Div.classList = "drinks";
            const beer2Title = document.createElement("h4");
            const beer2Desc = document.createElement("p");
                beer2Title.classList = "entries";
                beer2Desc.classList = "desc";
                    beer2Title.textContent = "Duff Lite";
                    beer2Desc.textContent = "The one and only Duff Lite, served ice-cold.";

        export const beer3Div = document.createElement("div");
        export const beer3Pic = document.createElement("img");
        beer3Pic.src = dufffancy;
        beer3Div.classList = "drinks";
            const beer3Title = document.createElement("h4");
            const beer3Desc = document.createElement("p");
                beer3Title.classList = "entries";
                beer3Desc.classList = "desc";
                    beer3Title.textContent = "Düff";
                    beer3Desc.textContent = "The one and only Düff, served ice-cold (with less freedom).";

        export const wine1Div = document.createElement("div");
        export const wine1Pic = document.createElement("img");
        wine1Pic.src = wine1  
        wine1Div.classList = "drinks";
            const wine1Title = document.createElement("h4");
            const wine1Desc = document.createElement("p");
                wine1Title.classList = "entries";
                wine1Desc.classList = "desc";
                    wine1Title.textContent = "Lambuggini Wine";
                    wine1Desc.textContent = "The finest in Italian boxed wine served in repurposed bottles to make any occasion appear fancy.";

        export const wine2Div = document.createElement("div");
        export const wine2Pic = document.createElement("img");
        wine2Pic.src = wine2
        wine2Div.classList = "drinks";
            const wine2Title = document.createElement("h4");
            const wine2Desc = document.createElement("p");
                wine2Title.classList = "entries";
                wine2Desc.classList = "desc";
                    wine2Title.textContent = "White or Red Wine";
                    wine2Desc.textContent = "That's right! Two colors to choose from.";
            
        export const cola1Div = document.createElement("div");
        export const cola1Pic = document.createElement("img");
        cola1Pic.src = cola1       
        cola1Div.classList = "drinks";
            const cola1Title = document.createElement("h4");
            const cola1Desc = document.createElement("p");
                cola1Title.classList = "entries";
                cola1Desc.classList = "desc";
                    cola1Title.textContent = "Buzz Cola";
                    cola1Desc.textContent = "Because the only thing that makes caffeine better is high-fructose corn syrup.";

        export const cola2Div = document.createElement("div");
        export const cola2Pic = document.createElement("img");
        cola2Pic.src = cola2;      
        cola2Div.classList = "drinks";
            const cola2Title = document.createElement("h4");
            const cola2Desc = document.createElement("p");
                cola2Title.classList = "entries";
                cola2Desc.classList = "desc";
                    cola2Title.textContent = "Diet Buzz";
                    cola2Desc.textContent = "...unless you're not interested in sugar. Then caffeine goes great with free refills. *Note: refills are NOT free.";

// Desserts title, list of h3 elements for each entry, adds p descriptions.
export const desserts = document.createElement("div#desserts");
    export const dessertsHeader = document.createElement("h3");
    dessertsHeader.classList = "titles";
        dessertsHeader.textContent = "Desserts";
            export const donuts = document.createElement("h4");
            donuts.classList = "entries";






