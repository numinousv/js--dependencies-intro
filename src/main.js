import "./style.css";

import headerHTML from "./templates/header/index.html?raw";
import mainHTML from "./templates/main/index.html?raw";
import footerHTML from "./templates/footer/index.html?raw";

const app = document.querySelector("#app");
app.innerHTML = headerHTML + mainHTML + footerHTML;
