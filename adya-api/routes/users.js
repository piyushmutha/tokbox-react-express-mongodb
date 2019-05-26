var express = require('express');
var User = require('../models/userModel');
const userRouter = express.Router();

userRouter.route('/:id').get((req, res) => {
  User.find({ _id: { "$ne": req.params.id } }, (err, users) => {
    res.json(users)
  })
})

userRouter.route('/').get((req, res) => {
  User.find({}, (err, users) => {
    res.json(users)
  })
}).post((req, res) => {
  try {
    var user = new User(req.body);
    var result = user.save(function (err, response) {
      res.json(response)
    });
  } catch (error) {
    res.status(500).send(error);
  }
})

module.exports = userRouter;