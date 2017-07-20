
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    domainName: String,
    domainId: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    query: String,
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
module.exports = mongoose.model('customer', customerSchema);