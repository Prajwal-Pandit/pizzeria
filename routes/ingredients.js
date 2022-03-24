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

/* GET pizza listing. */
router.get("/", function (req, res, next) {
    db.collection('Ingredients').find().toArray((err,result) => {
        if(err){res.send(err);}
        else{
            if(result!=""){
                res.send(result)
            }
            else{
                res.status(400).send({error:"No data found"});
            }
        }
    })
});

module.exports = router;
