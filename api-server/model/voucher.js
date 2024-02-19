const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const voucherSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  voucher: {
    type: String,
    required: false,
  },
  value: {
    type: Number,
    required: false,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    required: false,
    default: "NhanVo",
    ref: "admin",
  },
  createdOn: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

module.exports = mongoose.model("voucher", voucherSchema);
