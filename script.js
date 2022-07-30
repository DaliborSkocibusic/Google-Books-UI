
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

console.log("Myfet is " + myFetch);

async function fetchUser(url) {
    const response = await fetch(url);
    console.log("Response " + response);

    const data = await response.json();
    console.log("Data " + JSON.stringify(data));

    // Tyring this
    return JSON.stringify(data);

    // THis works
    return JSON.stringify(data);
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
