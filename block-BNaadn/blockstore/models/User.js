var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    age: Number

}, { timestramps: true });

module.exports = mongoose.model('User', userSchema);
