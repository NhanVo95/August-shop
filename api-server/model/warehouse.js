const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const warehoouseSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  productID: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "product",
  },
  SKU: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: false,
    default: 0,
  },
});

module.exports = mongoose.model("warehoouse", warehoouseSchema);
