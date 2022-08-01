import updateAuthors from "./Modules/DOM.js";
import { updateTitle } from "./Modules/DOM.js";
import { updateImage } from "./Modules/DOM.js";
import { updateDesc } from "./Modules/DOM.js";
import { updateDOM } from "./Modules/DOM.js";

let searchTerms = "";
let myFetch = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`;
let results = [];

// https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter

async function fetchUser(url) {
    const response = await fetch(url);
    const data = await response.json();

    let results = [];

    if (data) {
        if (data.items) {
            if (data.items.length >= 10) {
                for (let i = 0; i < 9; i++) {
                    results[i] = data.items[i].volumeInfo;
                    updateDOM(i, results[i]);
                }
            } else alert("Could not find enough items for that search term.");
        } else alert("Could not find enough items for that search term.");
    }
    return results;
}

document.querySelector("button").addEventListener("click", () => {
    event.preventDefault();
    searchTerms = document.getElementById("searchString").value;
    console.log(document.getElementById("searchString").value);
    myFetch = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`;

    if (searchTerms) {
        fetchUser(myFetch);
    } else {
        //clearDOM();
        alert("Please enter some search terms");
    }
});

// Adding modal feature
// document.getElementById("clickRange0").addEventListener("click", () => {
//     event.preventDefault();
//     let modal = document.getElementById("clickRange0");
//     alert(then);
// });
