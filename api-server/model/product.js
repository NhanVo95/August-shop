const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  catalogID: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "catalog",
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  imageList: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    required: false,
    default: Date.now,
  },
  view: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("product", productSchema);
