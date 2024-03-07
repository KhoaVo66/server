const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    name : String,
    decription: String,
    date : String,
    location: String,
})

const EventModel = mongoose.model("events", EventSchema)
module.exports = EventModel