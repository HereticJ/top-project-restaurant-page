export const about = document.createElement("div");
import phone from "./phone.jpg";
import email from "./email.jpg";

const aboutPage = document.createElement("h2");
aboutPage.textContent = "Contact Us";

const phoneNumber = document.createElement("h4");
phoneNumber.textContent = "(636) KL5-1239";
const phonePic = document.createElement("img");
phonePic.src = phone;

const emailTitle = document.createElement("h4");
emailTitle.textContent = "MoeFamilyFeedbag@yahoo.com"
const emailPic = document.createElement("img");
emailPic.src = email;

about.appendChild(aboutPage);
about.appendChild(phoneNumber);
about.appendChild(phonePic);
about.appendChild(emailTitle);
about.appendChild(emailPic);

