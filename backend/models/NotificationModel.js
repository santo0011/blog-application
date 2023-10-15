const { Schema, model } = require('mongoose');

const notificationSchema = new Schema({
    subject: {
        type: String,
        required : true
    },
    status: {
        type: String,
        default: 'unseen'
    },
    slug: {
        type: String,
        required : true
    },
    adminId: {
        type: String,
        required : true
    }

}, { timeseries: true });


module.exports = model('notification', notificationSchema);