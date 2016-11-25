var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var User = require("./app/models/user");

var app = express();

var router = express.Router();

// /usuarios get -> obtenerTodos
router.route("/users")
    .get(function(req,res){
        User.find(function(err,users){
            res.json(users);
        });
    })
    .post(function(req,res){
        //var user = new User();
        //user.name = "Fede";
        //user.edad = 25;

        var user = new User({name:"Fede",age:25});

        user.save(function(err){
            res.json("uusario creado");
        })
    });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/users");
router.use("/",function(req,res){
    res.json({mensaje:"Hi!!!!"})
});

app.use("/api",router);


app.listen(3000,function(){
    console.info("Server is running mother fucker");
});