const {Schema, model} = require('mongoose');

const TagSchema = Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    }
    
},{ 
    timestamps : true,
    versionKey : false,
    collection: 'tag'
});

module.exports = model ('Tag', TagSchema);