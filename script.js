let searchTerms = "Harry Potter";
// let APIKey = "AIzaSyB_tWPK8L8Uv5EAk7nYYbhflEuE8Gq5JMo";
const myFetch = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`;

// https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter

// fetchUser(myFetch)
//     .then((response) => response.json())
//     .then((data) => {
//         const results = data;
//         // const { title, first, last } = results[0].name;
//         // document.querySelector("h2").innerText = `${title} ${first} ${last}`;
//         console.log("results are " + results);
//     });

async function fetchUser(url) {
    const response = await fetch(url);
    console.log("Response " + response);

    const data = await response.json();

    let results = [];

    for (let i = 0; i < 10; i++) {
        results[i] = data.items[i].volumeInfo;
    }

    let a = data.items[0];
    let b = data.items[1];

    let i = 5;
    // Title
    document.getElementById("result10").textContent = "Title: " + results[i].title;

    // Authors
    document.getElementById("result10__author").textContent =
        "Authors: " + results[i].authors;

    // Description
    let catDesc = results[i].description.slice(0, 111) + "...";
    document.getElementById("result10__description").textContent =
        "Description: " + catDesc //results[i].description;

    // Needs image, author, title and description

    // image
    document.getElementById("image10").src =
        results[i].imageLinks.smallThumbnail;

    // worls
    //console.log("Data " + JSON.parse(JSON.stringify(data)));

    // Tyring this
    return data;

    // THis works
    // return JSON.stringify(data);
    // results.then((item) => console.log(item));
    // console.log("Response as json " + results);
    // response.then((item) => {
    //     console.log(item);
    // });
    // const { title } = results[0].kind;
    // results.then((value) => console.log(value));

    // data.then((value) => console.log(value));
    // document.querySelector("h2").innerText = `${results}`;

    // return response;

    // const { results } = await response.json();
    // console.log("Response after JSON is" + results);
    // const { results } = data;
    // const name = results[0]
    // const {title, first, last} = name
    // const { title, first, last } = results[0].name;
    // document.querySelector("h2").innerText = `${title} ${first} ${last}`;
    // console.log("results are " + results);
    // return data;
}

let repval = fetchUser(myFetch);

const evalResult = async (input) => {
    console.log("Eval being called. Input is: " + input);
    let retArr = input.then((value) => {
        console.log(value);
        value.map((item) => item.toUpperCase());
    });
};
// const procval = repval.then((value) => {
//     console.log(value);
//     const { results } = value;
// });

// => value.map((item) => item)); //console.log(value));
// fetchUser();

document.querySelector("button").addEventListener("click", () => {
    // console.log("Clicked the button");
    // console.log("Value entered into myFetch: " + myFetch);
    repval = fetchUser(myFetch);
    // repval = evalResult(repval);
});
