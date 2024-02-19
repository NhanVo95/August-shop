const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  clientID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "client",
  },
  transactionID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "transaction",
  },
  quantity: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  voucher: {
    type: String,
    required: false,
  },
  data: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
    default: "waiting",
  },
});

module.exports = mongoose.model("order", orderSchema);
