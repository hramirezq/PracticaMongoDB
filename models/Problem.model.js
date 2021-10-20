const {Schema, model} = require('mongoose');

const ProblemSchema = Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    categoryId:{
        require: true,
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    complexity:{
        type: String,
        required: true
    },
    tags:[{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }]
    
},{ 
    timestamps : true,
    versionKey : false,
    collection: 'problem'
});

module.exports = model ('Problem', ProblemSchema);