Task = require('../models/task');
module.exports.add = function(req,res){
    Task.create({
        task:req.body.task,
        category:req.body.category,
        date:req.body.date
    },function(err,newTask){
        if(err){
            console.log("error in creating a task");
            return;
        }
        console.log('*******',newTask);
        res.redirect('back');
    });
}