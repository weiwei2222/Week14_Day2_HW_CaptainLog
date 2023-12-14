const mongoose = require("mongoose");

const LogShema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    entry: { type: String, required: true },
    shipIsBroken: Boolean,
  },
  { timestamps: true }
);

const Logs = mongoose.model("Logs", LogShema);

module.exports = Logs;
