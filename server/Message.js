const mongoose = require('mongoose');

//for each message we need the name of the user, the content of the message and a timestamp
const messageSchema = new mongoose.Schema({
    content: String,
    name: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Message', messageSchema);