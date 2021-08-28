const express = require("express");

const app = express();

// I want to handle a request to the home page
// "/"
app.get("/", (request, response) => {
  console.log("HERE?");
  response.sendFile(__dirname + "/views/index.html");
  console.log(__dirname);
  //   response.write("<h1>Hello Home Page</h1>");
  //   response.end();
});

app.get("/about", (request, response) => {
  response.write(`<h1>About page</h1>`);
  response.end();
});

app.get("/contact", (request, response) => {
  response.write(`<h1>Im unreachable</h1>`);
  response.end();
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
