var mongoose = require('bluebird').promisifyAll(require('mongoose'));
// var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var agentSchema = new Schema({
    agentId:Number,
    agentName: String,
    siteId: String,
    email : String,
    password: String,
   
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

// create the model for agent and expose it to our app
module.exports = mongoose.model('agent', agentSchema);