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

router.delete("/", (req, res) => {
  const { title, user } = req.query;

  Queue.findOneAndDelete({ title: title, user: user }).then((res) => {
    debugger;

    if (res) {
      //success, otherwise null
      User.findById(user).then((user) => {
        for (let i = 0; i < user.queue.length; i++) {
          const element = user.queue[i];

          if (element.title === title) {
            debugger;
            user.queue = user.queue.slice(0, i).concat(user.queue.slice(i + 1));
            debugger;
            user.save().then((user) => {
              return res.json(user.queue);
            });
          }
        }
      });
    }
  });
});

module.exports = router;
