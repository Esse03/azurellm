import {prompt} from "./src/prompt.js";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => prompt(e))