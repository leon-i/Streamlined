const mongoose = requier("mongoose");
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  Genres: {
    type: Array,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: "providers",
  },
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports = Show = mongoose.model("show", ShowSchema);
