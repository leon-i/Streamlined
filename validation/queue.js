const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateQueueInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.description = validText(data.description) ? data.description : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required!";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required!";
  }
  if (Validator.isEmpty(data.provider)) {
    errors.provider = "Provider field is required!";
  }
  if (Validator.isEmpty(data.rating)) {
    errors.rating = "Rating field is required!";
  }
  if (Validator.isEmpty(data.imageUrl)) {
    errors.imageUrl = "ImageUrl field is required!";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
