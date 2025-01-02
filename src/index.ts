import './style/index.scss';
import Bootstrap from "./application/Bootstrap";

const elementId = "app";
const element: null | HTMLElement = document.getElementById(elementId);

if (element === null) {
    throw new Error("An element #" + elementId + " is not found.");
}

document.addEventListener(
    'DOMContentLoaded',
    async () => new Bootstrap().boot(element),
    false,
);

