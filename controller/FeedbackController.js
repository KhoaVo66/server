const asyncHandler = require("express-async-handler");
const FeedbackModel = require("../models/Feedback")

const CreateFeedback = asyncHandler(async (req, res) => {
    FeedbackModel.create({
        name : req.body.name,
        email : req.body.email,
        phone_number: req.body.phone,
        message: req.body.message,
    })
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

module.exports = {CreateFeedback}