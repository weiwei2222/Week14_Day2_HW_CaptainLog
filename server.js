require("dotenv").config();
const express = require("express");
const logRoutes = require("./router/log");
const PORT = process.env.PORT || 3000;

const app = express();

// ------mongoose connect with data-----
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// -------middleware---------
const methodOverride = require("method-override");
const jsxViewEngine = require("jsx-view-engine");

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

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
