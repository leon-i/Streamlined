const express = require("express");
const router = express.Router();
const Queue = require("../../models/Queue");
const User = require("../../models/User");
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

  const newQueueItem = new Queue(data);
  newQueueItem.save().then((newQueueItem) => {
    User.findById(newQueueItem.user).then((user) => {
      debugger;
      if (user) {
        user.queues.push(newQueueItem);
        user.save().then((user) => res.json(user));
      }
    });
  });
});

router.get("/", (req, res) => {});

module.exports = router;
