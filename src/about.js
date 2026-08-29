export const about = document.createElement("div");
import phone from "./phone.jpg";
import email from "./email.jpg";

const aboutPage = document.createElement("h2");
aboutPage.textContent = "Contact Us";

const phoneNumber = document.createElement("h4");
const phoneDisclaimer1 = document.createElement("p");
const phoneDisclaimer2 = document.createElement("p");
phoneDisclaimer2.classList = "pd2";
phoneNumber.textContent = "By phone at: (636) KL5-1239*";
phoneDisclaimer1.textContent = "Note: Prank Phone Calls Will NOT Be Tolerated";
phoneDisclaimer2.textContent = "*Any threats and/or opinions issued by the restaurant owner are neither condoned or shared by Moe's Family Feedbag LLC.";
const phonePic = document.createElement("img");
phonePic.src = phone;

const emailTitle = document.createElement("h4");
const emailDisclaimer = document.createElement("p");
emailDisclaimer.classList = "ed";
emailTitle.textContent = "MoeFamilyFeedbag@yahoo.com*";
emailDisclaimer.textContent = "*Please allow 12-15 business days for replies. Replies are not guaranteed. For legal concerns, please contact Lionel Hutz Attorney at Law (As Seen On TV) ICan'tBelieveIt'sALawFirm@GeoCities.biz";
const emailPic = document.createElement("img");
emailPic.src = email;

about.appendChild(aboutPage);
about.appendChild(phoneNumber);
about.appendChild(phonePic);
about.appendChild(phoneDisclaimer1);
about.appendChild(phoneDisclaimer2);
about.appendChild(emailTitle);
about.appendChild(emailPic);
about.appendChild(emailDisclaimer);




