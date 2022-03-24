var express = require('express');
var router = express.Router();

const mongoClient = require("mongodb").MongoClient;
const dburl = "mongodb://localhost:27017";
const dbname = "Pizzeria";

mongoClient.connect(dburl, (err, client) => {
    if (err) {
        console.log(err);
    } else {
        db = client.db(dbname);
        console.log("Connection established successfully..");
    }
});

router.post("/add", function (req, res, next) {
    db.collection('cart').insertOne(req.body,(err,docs) => {
        if(err) res.status(400).send({err:err});
        res.send({message:"Added to cart"});
    })
});

router.get("/", (req, res, next) =>{
    db.collection('cart').find().toArray((err,result) => {
        if(err){
            res.send(err);
        }
        else{
            if(result!=""){
                res.send(result)
            }else{
                res.status(404).send({error:"No data found"});
            }
        }
    })
});

router.post("/delete", function (req, res, next) {
    db.collection('cart').deleteOne({'cid':req.body.cid},(err,result) => {
        if(err){res.status(400).send({error:err})}
        else{res.send(result)}
    })
});

router.delete("/remove", function (req, res, next) {
    db.collection('cart').remove({},(err,result) => {
        if(err){res.status(400).send({error:err})}
        else{res.send(result)}
    });
});

module.exports = router;