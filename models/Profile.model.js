const {Schema, model} = require('mongoose');

const ProfileSchema = Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    statusId:{
        type: Schema.Types.ObjectId,
        ref: 'Status'
    }
    
},{ 
    timestamps : true,
    versionKey : false,
    collection: 'profile'
});

module.exports = model ('Profile', ProfileSchema);