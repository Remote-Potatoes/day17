const express = require("express");

const app = express();

// I want to handle a request to the home page
// "/"

// app -> our server
// .get -> GET method / GET Http Verb. Which kind of request
// "/" -> the url where the request is being done to
// the rest is, what we call, the request handler
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
  //   response.write("<h1>Hello Home Page</h1>");
  //   response.end();
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
  //   response.write(`<h1>About page</h1>`);
  //   response.end();
});

app.get("/contact", (request, response) => {
  response.write(`<h1>Im unreachable</h1>`);
  response.end();
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
