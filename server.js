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

// index page
app.get("/", async (req, res) => {
  try {
    const foundAllLogs = await Logs.find({});
    res.status(200).render("Index", { logs: foundAllLogs });
  } catch (err) {
    res.status(400).send(err);
  }
});

// search by title
app.post("/search", async (req, res) => {
  try {
    const searchLog = await Logs.find({ title: req.body.title });
    res.render("Search", { logs: searchLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

// show one log
app.get("/log/:id", async (req, res) => {
  try {
    const foundOneLog = await Logs.findById(req.params.id);
    res.render("Show", { logs: foundOneLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

// create
app.get("/new", async (req, res) => {
  res.render("New");
});

app.post("/", async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  try {
    const createLog = await Logs.create(req.body);
    res.status(200).redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete
app.delete("/log/:id", async (req, res) => {
  try {
    const deleteLog = await Logs.findByIdAndDelete(req.params.id);
    res.status(200).redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});

// edit
app.get("/log/:id/edit", async (req, res) => {
  try {
    const foundLog = await Logs.findById(req.params.id);
    res.status(200).render("Edit", { logs: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

// update
app.put("/log/:id", async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  try {
    const updateLog = await Logs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).redirect(`/log/${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(3000, () => {
  console.log("My server is set up and running");
});
