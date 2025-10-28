import "./style.css";
import rndmHTML from "./templates/rndm/index.html?raw";
import headerHTML from "./templates/header/index.html?raw";
import mainHTML from "./templates/main/index.html?raw";
import footerHTML from "./templates/footer/index.html?raw";


const app = document.querySelector("#app");
app.innerHTML = rndmHTML + headerHTML + mainHTML + footerHTML;

