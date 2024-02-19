const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const priceListSchema = new Schema({
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
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
    default: 0,
  },
});

module.exports = mongoose.model("priceList", priceListSchema);
