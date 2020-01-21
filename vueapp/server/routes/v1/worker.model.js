const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Worker
let Worker = new Schema(
  {
    name: {
      type: String
    },
    role: {
      type: String
    }
  },
  {
    collection: "workers"
  }
);

module.exports = mongoose.model("Worker", Worker);
