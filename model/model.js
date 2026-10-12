import home from "../pages/home.js";

import photos from "../pages/photos.js";

import contact from "../pages/contact.js";

import about from "../pages/about.js";

export function loadPage(pageID)
{
    const main = document.querySelector("main");

    switch(pageID)
    {
        case "home":
            main.innerHTML = home;
        break;

        case "photos":
            main.innerHTML = photos
        break;

        case "contact":
            main.innerHTML = contact;
        break;

        case "about":
            main.innerHTML = about
        break;
    }
}