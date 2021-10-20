const {Schema, model} = require('mongoose');

const StatusSchema = Schema({
    status:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
    
},{ 
    timestamps : true,
    versionKey : false,
    collection: 'status'
});

module.exports = model ('Status', StatusSchema);