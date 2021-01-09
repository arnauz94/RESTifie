const { MongoClient } = require('mongodb');
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user_api_database");
    var myquery = { email: /[\s\S]*/ };
    var newvalues = { $set: { nbWord: 0 } };
    dbo.collection("users").updateMany(myquery, newvalues, function (err, res) {
        if (err) throw err;
        db.close();
    });
}); 

