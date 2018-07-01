const mongodb = require("../config/mongodb");

function getAllPlaces(callback){
    mongodb.connect((err, db) => {
        db.collection("estabelecimentos").find().toArray(callback);
    })
}

function disconnect(){
    return mongodb.disconnect();
}

module.exports = { getAllPlaces, disconnect }