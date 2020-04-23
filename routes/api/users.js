const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const validateSignupInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.post("/register", (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Use the validations to send the error
      errors.email = "A user with that email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      // Use the validations to send the error
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
          queues: user.queues
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        // And here:
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

// router.post(
//   "/addToCart", 
//   (req, res) => {
//     // debugger;
//     const { title, userId } = req.body.params;
//     User.findById(userId).then((user) => {
//       //   debugger;
//       let duplicate = false;

//       user.likedShows.forEach((cartInfo) => {
//         if (cartInfo.title === title) {
//           duplicate = true;
//         }
//       });
//       //provider,title. imgurl
//       //   debugger;
//       if (duplicate) {
//         // if dulicate, should delete the title
//         // debugger
//         // User.findOneAndDelete(
//         //     { _id: userId, title: title },
//         //     { new: true },
//         //     () => {
//         //         debugger
//         //         res.status(200).json(user.likedShows);
//         //     }
//         // )
//         //   User.findByIdAndUpdate(
//         //     { _id: userId, title: title },
//         //     { $inc: { "likedShows.$.quantity": 1 } },
//         //     { new: true },
//         //     () => {
//         //     //   if (err) return res.json({ success: false, err });
//         //       res.status(200).json(user.likedShows);
//         //     }
//         //   );
//       } else {
//         // debugger;
//         User.findByIdAndUpdate(
//           { _id: userId },
//           {
//             $push: {
//               likedShows: {
//                 title: title,
//                 quantity: 1,
//                 date: Date.now(),
//               },
//             },
//           },
//           { new: true },
//           (err, user) => {
//             if (err) return res.json({ success: false, err });
//             res.status(200).json(user.likedShows);
//           }
//         );
//       }
//     });
//   }
// );

router.get("/queue", (req, res) => {
    // debugger;
  const userId = req.query[0];
  debugger
  User.findById(userId).populate("queues")
  .then((user) => {
      debugger
    res.status(200).json(user);
  });
});

module.exports = router;
