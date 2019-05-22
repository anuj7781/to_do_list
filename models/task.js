const mongoose = require('mongoose');


//define the schema
//here you can put validations here
const taskSchema = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

//name your collection
const Task =  mongoose.model('Task',taskSchema);

module.exports = Task;