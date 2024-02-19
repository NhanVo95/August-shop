const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inboundSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  quantity: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("inbound", inboundSchema);
