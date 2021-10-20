const {Schema, model} = require('mongoose');

const SolutionSchema = Schema({

    solution:{
        type: String,
        required: true
    },
    language:{
        type: String,
        required: true
    },
    problemId:{
        require: true,
        type: Schema.Types.ObjectId,
        ref: 'Problem'
    },
    description:{
        type: String,
        required: false
    }
    
},{ 
    timestamps : true,
    versionKey : false,
    collection: 'solution'
});

module.exports = model ('Solution', SolutionSchema);