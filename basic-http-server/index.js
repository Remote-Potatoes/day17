// checking whats inside the require function. Is whats inside a path? No! -> It means its a node package. Do we have node_modules on this folder? No! Its an internal node package
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    if (request.method === "GET") {
      response.write(`<h1>Home Page</h1>`);
    }
  }
  response.end();
});

server.listen(3000, () => {
  console.log(`Server is starting on http://localhost:3000`);
});
