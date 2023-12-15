require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const logRoutes = require("./router/log");
const PORT = process.env.PORT || 3000;

const app = express();

// ------mongoose connect with data-----
require("./config/database");

// ---------view engine --------
const jsxViewEngine = require("jsx-view-engine");

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// -------middleware---------
app.use((req, res, next) => {
  console.log("Middleware is running");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// --------use routes --------------
app.use(logRoutes);

app.listen(PORT, () => {
  console.log("My server is set up and running");
});
