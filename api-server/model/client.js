const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
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
  address: {
    type: String,
    required: false,
  },
  createdOn: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

module.exports = mongoose.model("client", clientSchema);
