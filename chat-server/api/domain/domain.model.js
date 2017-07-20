
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var domainSchema = new Schema({
    domainId:Number,
    domainName:String,
    ownerId:String,
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
module.exports = mongoose.model('domain', domainSchema);