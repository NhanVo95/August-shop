const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catalogSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  parentID: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "catalog",
  },
  detail: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("catalog", catalogSchema);
