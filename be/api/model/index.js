let mongoose = require('mongoose')
let studentSchema = new mongoose.Schema({
    name: String
})
module.exports = mongoose.model('crud', studentSchema)