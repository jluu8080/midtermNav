
import {loadPage} from "../model/model.js";

function changeRoute()
{
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");

    console.log(pageID);
    loadPage(pageID);
}


function initApp()
{
    loadPage("home");
    window.addEventListener("hashchange", changeRoute);
}

// initApp();


// Mobile navigation menu
const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector(".navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });
}


// Teammate's original commented-out code
// import home from "../pages/home.js";
// import about from "../pages/about.js";
// import contact from "../pages/contact.js";
// import photos from "../pages/photos.js";

// function showPage(page) {
//   if (page === "home") {
//     document.getElementById("content").innerHTML = home();
//   }

//   if (page === "about") {
//     document.getElementById("content").innerHTML = about();
//   }

//   if (page === "contact") {
//     document.getElementById("content").innerHTML = contact();
//   }

//   if (page === "photos") {
//     document.getElementById("content").innerHTML = photos();
//   }
// }

// nav(showPage);
// showPage("home");
