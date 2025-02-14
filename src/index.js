import "./styles.css";
import myIcon from "./icon.png";

import {greeting} from "./greeting.js";

console.log(greeting);

const image = document.createElement('img');
image.src = myIcon;

document.body.appendChild(image);