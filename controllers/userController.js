const Logs = require("./../models/logs");

// ---- get all logs ------
const getAllLogs = async (req, res) => {
  try {
    const foundAllLogs = await Logs.find({});
    res.status(200).render("Index", { logs: foundAllLogs });
  } catch (err) {
    res.status(400).send(err);
  }
};

// -----search log by title-----
const searchLog = async (req, res) => {
  try {
    const searchLog = await Logs.find({ title: req.body.title });
    res.render("Search", { logs: searchLog });
  } catch (err) {
    res.status(400).send(err);
  }
};

// ----- show a single log------
const showOneLog = async (req, res) => {
  try {
    const foundOneLog = await Logs.findById(req.params.id);
    res.render("Show", { logs: foundOneLog });
  } catch (err) {
    res.status(400).send(err);
  }
};

// ------create a new log------
const createNewLog = async (req, res) => {
  res.render("New");
};

const postNewLog = async (req, res) => {
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
};

// -------delete log------
const deleteLog = async (req, res) => {
  try {
    const deleteLog = await Logs.findByIdAndDelete(req.params.id);
    res.status(200).redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
};

// ------- update log------
const editLog = async (req, res) => {
  try {
    const foundLog = await Logs.findById(req.params.id);
    res.status(200).render("Edit", { logs: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
};

const updateLog = async (req, res) => {
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
};

module.exports = {
  getAllLogs,
  searchLog,
  showOneLog,
  createNewLog,
  postNewLog,
  deleteLog,
  editLog,
  updateLog,
};
