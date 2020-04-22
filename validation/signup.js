const Validator = require("validator");
const validText = require("./valid-text");



module.exports = function validateSignupInput(data) {
    let errors = {};

    data.username = validText(data.username) ? data.username : "";
    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.username)) {
        errors.username = "Username field is required!";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required!";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required!";
    }

    if (!Validator.isLength(data.username, { min: 3, max: 12 })) {
        errors.username = "Username must be between 3 and 12 characters!";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 15 })) {
        errors.password = "Username must be between 6 and 15 characters!";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid!";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Password must match!";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}