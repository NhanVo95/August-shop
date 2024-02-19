const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
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

module.exports = mongoose.model("admin", adminSchema);
