const express = require("express");
const router = express.Router();
const Queue = require("../../models/Queue");
const User = require('../../models/User')
const validateQueueInput = require("../../validation/queue");

router.post("/", (req, res) => {
  debugger;
  const data = req.body.params;
//   debugger
//   const { errors, isValid } = validateQueueInput(data);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   debugger

  const newQueueItem = new Queue(data)
  newQueueItem.save().then((queue) => {
      debugger
    return res.json(queue)});
});

router.get("/", (req, res) => {});

module.exports = router;
