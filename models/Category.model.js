const {Schema, model} = require('mongoose');

const CategorySchema = Schema({
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
    collection: 'category'
});

module.exports = model ('Category', CategorySchema);