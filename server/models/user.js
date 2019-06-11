var mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        minlength: 1,
        type: String
    }
});

module.exports = {User};