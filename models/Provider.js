const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.export = Provider = mongoose.model("provider", ProviderSchema);
