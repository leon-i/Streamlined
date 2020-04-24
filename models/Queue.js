const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QueueSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // rating: {
  //   type: Number,
  //   required: true,
  // },
  // genres: {
  //   type: Array,
  //   required: true,
  // },
  imageUrl: {
    type: String,
    required: true,
  },
  provider: {
    type: Array,
    default: [],
  },
  // provider: {
  //   type: Schema.Types.ObjectId,
  //   ref: "providers",
  // },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

QueueModel = mongoose.model("queue", QueueSchema);
module.exports = QueueModel;
