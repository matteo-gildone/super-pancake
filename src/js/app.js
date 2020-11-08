import { sum } from "./sum.js";
console.log(`the sum is ${sum(1, 2)}`);
const fn = () => 1;

const app = document.getElementById("app");
const result = `<div class="bg-indigo-500 text-white">${sum(1, 2)}</div>`;
app.innerHTML = result;
