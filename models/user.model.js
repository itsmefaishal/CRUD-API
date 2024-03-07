const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name : {
            type : String,
            require : [true, "Please enter your name"],
            default : ""
        },
        email : {
            type : String,
            require : [true, "Please enter your email"],
            default : ""
        },
        number : {
            type : Number,
            require : true,
            default : 0
        },
        address : {
            type : String,
            require : false,
            default : ""
        },
        country : {
            type : String,
            require : false,
            default : "India"
        }
    },
    {
        timestamps : true,
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;