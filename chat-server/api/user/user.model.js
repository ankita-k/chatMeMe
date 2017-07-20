
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var userSchema = new Schema({
   
    userName:String,
    email: String,
    subscription: String,
    
    createdOn: {
        type: Date,
        default: Date.now
    },
     createdBy: {
        type: String,
        default: " "
    },
    updatedOn: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: String,
        default: " "
    }
});
module.exports = mongoose.model('user', userSchema);