const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  status: {
    type: String,
    required: true,
  },
  clientID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "client",
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
  payment: {
    type: String,
    required: true,
    default: "Cash",
  },
  paymentInfo: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  createdOn: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

module.exports = mongoose.model("transaction", transactionSchema);
