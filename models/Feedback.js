const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    name : {type: String, default: ""},
    email : String,
    phone_number: {type: String, default: ""},
    message : String,
})

const FeedbackModel = mongoose.model("feedback", FeedbackSchema)
module.exports = FeedbackModel