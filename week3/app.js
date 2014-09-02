var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db){
    if(err) throw err;
    
    var students = db.collection('students');
    
    students.find().toArray(function(err, docs){
        if(err) throw err;
        
        docs.forEach(function(doc){
           	removeLowestHowework(doc);
        });
        
        db.close();
    });
    
    function removeLowestHowework(doc){
        var index=0;
        if(doc.scores[2]['score']<doc.scores[3]['score']){
            index = 2;
        }else{
            index = 3;
        }         
        var scores = doc.scores;  
		scores.splice(index,1);
		students.update({"_id":doc['_id']}, {"$set" : {"scores" : scores}}, function(err, result){
            if(err) throw err;
        });        
        
    }
});


