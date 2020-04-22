const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const validateSignupInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");


router.get('/show', (req, res) => {
    
})

module.export = router;