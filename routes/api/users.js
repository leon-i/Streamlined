const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const validateSignupInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");


router.post('/register', (req, res) => {

    const { errors, isValid } = validateSignupInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Use the validations to send the error
                errors.email = 'A user with that email already exists';
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                const payload = { id: user.id, email: user.email, username: user.username, queue: user.queue };

                                jwt.sign(
                                    payload,
                                    keys.secretOrKey,
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: "Bearer " + token
                                        });
                                    })
                            })
                            // .catch(err => console.log(err))
                    })
                })
            }
        })
})

router.post('/login', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                // Use the validations to send the error
                errors.email = 'User not found';
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            username: user.username,
                            email: user.email,
                            queue: user.queue
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        )
                    } else {
                        // And here:
                        errors.password = 'Incorrect password'
                        return res.status(400).json(errors);
                    }
                })
        })
})

router.get('/queue', (req, res) => {
    const userId= req.query[0];
    User.findById(userId).then(user => {
        const payload = {};
        user.queue.forEach(queueItem => {
            payload[queueItem.mediaId] = queueItem;
        });
        return res.json(payload);
    })
});

router.post('/queue', (req, res) => {
    const { userId, media, imageUrl, providers } = req.body;

    User.findById(userId).then(user => {
        const queueItem = {
            mediaId: media.Id,
            title: media.Title,
            imageURL: imageUrl,
            providers: providers
        }
        
        user.queue.push(queueItem);
        user.save();
        queueItem._id = user.queue[user.queue.length - 1].id;
        return res.json(queueItem);
    })
});

router.delete('/queue', (req, res) => {
    const { userId, itemId, mediaId } = req.query;

    User.findById(userId).then(user => {
        user.queue.pull(itemId);
        user.save();
        return res.json({ mediaId });
    })
});

router.delete('/queue/clear', (req, res) => {
    const userId = req.query[0];
    User.findById(userId).then(user => {
        user.set('queue', []);
        user.save();
        return res.json({ msg: 'success' });
    });
});

module.exports = router;