const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type : String,
        required:true,
        unique:true
    },
    nbWord:{
        type : Number,
        default: 0,
        expires: '1m'
    }
});

const User = mongoose.model('user',userSchema);

module.exports = User;
