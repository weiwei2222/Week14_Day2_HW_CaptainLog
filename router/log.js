const express = require("express");
const router = express.Router();

const {
  getAllLogs,
  searchLog,
  showOneLog,
  createNewLog,
  postNewLog,
  deleteLog,
  editLog,
  updateLog,
} = require("./../controllers/userController");

// GET - index page
router.get("/", getAllLogs);

// POST -  search by title
router.post("/search", searchLog);

// GET - show one log
router.get("/log/:id", showOneLog);

// GET - create new
router.get("/new", createNewLog);

router.post("/", postNewLog);

// LDELETE -
router.delete("/log/:id", deleteLog);

// GET - edit
router.get("/log/:id/edit", editLog);

// PUT - update
router.put("/log/:id", updateLog);

module.exports = router;
