Google Books UI
MVP:
Create a page that allows users to search for books
Page should include the following:
Header section introducing the page
Form containing a text input and a submit / search button
A grid of books
Instructions:
When the submit button is clicked you need the request books from the Google books API using the input value as your query string
The books that you receive should be rendered in the books grid.
Each book in the grid should have an image, author, title and description
The grid should be responsive on different screen sizes
You should use async / await for your request code, NOT .then
Styling (required):
This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
Styling must use BEM, and each block should have its own SCSS file
Your palette should use variables
Application Design (required):
You should separate DOM functions and non-DOM functions in different modules Example: https://github.com/chillcaw/el-salvador-code-alongs/tree/master/js-modules
Write as many non-DOM functions as you can
Functions should do 1 thing, and should be as pure and reusable as possible
Always use iterators over loops
Always parametrize and abstract large pieces of duplicate code.
Bonus (optional, but highly recommended):
Give feedback to the user when no book results can be found for the query.
When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.
Resources:
Fetch API
Using JavaScript Fetch API to get data
Google Books Documentation
Async / Await Requests Example |TODO|
Fetch documentation
DEADLINE: 2nd of August :bangbang:
developer.mozilla.orgdeveloper.mozilla.org
Fetch API - Web APIs | MDN
The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set. (24 kB)
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

digitalocean.comdigitalocean.com
How To Use the JavaScript Fetch API to Get Data  | DigitalOcean
In this tutorial, you will create both GET and POST requests using the Fetch API.
Google DevelopersGoogle Developers
Volume: list  |  Google Books APIs  |  Google Developers (9 kB)
