require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const jsxViewEngine = require("jsx-view-engine");
const Logs = require("./models/logs");

const app = express();

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use((req, res, next) => {
  console.log("Middleware is running");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  try {
    const foundAllLogs = await Logs.find({});
    res.status(200).render("Index", { logs: foundAllLogs });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/new", async (req, res) => {
  res.render("New");
});
