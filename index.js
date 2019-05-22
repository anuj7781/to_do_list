const express = require('express');
const db = require('./config/mongoose');
const Task = require('./models/task');
const app = express();
const port = 8000;
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('assets'));

//use the express router
//app.use('/',require('./routes/index'));

app.get('/',function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log('err in fetching tasks from db');
            return;
        }
        return res.render('home',{
            title:"TO DO",
            task_list:tasks
        });    
    });
});

app.post('/add-task/',function(req,res){
    console.log(req.body.task);
    console.log(req.body.category);
    console.log(req.body.date);
    Task.create({
        task:req.body.task,
        category:req.body.category,
        date:req.body.date
    },function(err,newContact){
        if(err){
            console.log("error in creating a task",err);
            return;
        }
        console.log('*******',newContact);
        res.redirect('back');
    });

});


app.post('/delete-task/',function(req,res){
    // //get the id from query in the  url
    // let id = req.query.id

    // //find the contact in the database using id and delete it
    // Contact.findByIdAndDelete(id,function(err){
    //     if(err){
    //         console.log('Error in deleting an object from database');
    //     }
    //     return res.redirect('back');
    // });
    console.log(req.body);
});

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is runn ing on port ${port}`);
});