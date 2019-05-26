var express = require('express');
var Schedule = require('../models/scheduleModel');
const router = express.Router();

router.route('/:by/:with/:at').get((req, res) => {
    var at = req.params.at - 3600;
    Schedule.find({ by: req.params.by, with: req.params.with, at: { "$gt": at } }, (err, schedule) => {
        res.json(schedule)
    })
})

router.route('/').post((req, res) => {
    try {
        var schedule = new Schedule(req.body);
        var result = schedule.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;