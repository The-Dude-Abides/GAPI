const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sheetSchema = new Schema({
  title: String,
  id: { type: String, required: true },
  range: { type: Array, required: true },
  date: { type: Date, default: Date.now }
});

const Sheet = mongoose.model("sheet", sheetSchema);

module.exports = Sheet;
