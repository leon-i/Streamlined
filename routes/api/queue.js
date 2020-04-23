const express = require("express");
const router = express.Router();
const Queue = require("../../models/Queue");
const User = require("../../models/User");
const validateQueueInput = require("../../validation/queue");

router.post("/", (req, res) => {
  const data = req.body.params;
  //   debugger
  //   const { errors, isValid } = validateQueueInput(data);

  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }

  //   debugger
  // Queue.findOne({})

  const newQueueItem = new Queue(data);
  newQueueItem.save().then((queue) => {
    User.findById(queue.user).then((user) => {
      if (user) {
        user.queue.push(newQueueItem);
        user.save().then((user) => {
          res.json(user.queue);
        });
      }
    });
  });
});

router.get("/", (req, res) => {});

module.exports = router;
