const express=require('express');
const app=express();
const path = require('path');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
//middleware
app.use(bodyparser.json());
app.use(express.static(__dirname));
app.use(bodyparser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/travel');
var db=mongoose.connection
db.on('err',()=>{ console.log("erro in connecting to database")})
db.once('open',()=>{ console.log("connected to database")})

app.post("/contact.html",(req,res)=>{
    var name=req.body.username
    var email=req.body.email
    var phone=req.body.phone
    var message =req.body.message

    var data={
        "Name":name,
        "Email":email,
        "Phone-Number":phone,
        "Message":message
    }

    db.collection('travel').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }else{
            console.log("Record inserted succesfully");
        }
    })
    return res.redirect('signup_successfull.html');

});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(8000,()=>{
    console.log("server started !");
});