const express = require('express');
const db = require('./config/mongoose');
const Task = require('./models/task');

const app = express();
const port = 8000;

//use the express router
app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('assets'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running on port ${port}`);
});