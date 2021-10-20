const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    nickname:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    cellphone:{
        type: String,
        required: false
    },
    statusId:{
        type: Schema.Types.ObjectId,
        ref: 'Status'
    },
    profileId:[{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }]
    
},{ 
    timestamps : true,
    versionKey : false,
    collection: 'user'
});

module.exports = model ('User', UserSchema);