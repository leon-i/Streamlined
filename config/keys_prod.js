module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY,
  apiKeys: process.env.API_KEYS.split(" "),
  movieDBKey: process.env.MOVIE_DB_KEY,
};
