const express = require("express");

const app = express();

// SET IS VERY VERY SPECIFIC TO EXPRESS (WE DONT USE IT A LOT BESIDES FOR VIEW ENGINE)
app.set("view engine", "hbs");

// USE is used in other frameworks as well, but its not a web standard. Use basically defines that we are dealing with a 'middleware'
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const randomNumber = Math.random();
  res.render("home-page", { isRemotePotatoes: randomNumber < 0.5, user: {} });
});

app.get("/about", (req, res) => {
  res.render("about", { user: {} });
});

app.listen(3005, () => {
  console.log("Listening to port 3005");
});
