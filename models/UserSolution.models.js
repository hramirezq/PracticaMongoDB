const {Schema, model} = require('mongoose');

const UserSolutionSchema = Schema({
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
    userId:{
        require: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    observations:{
        type: String,
        required: false
    }
    
},{ 
    timestamps : true,
    versionKey : false,
    collection: 'userSolution'
}
);

module.exports = model ('UserSolution', UserSolutionSchema);