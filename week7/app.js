var express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./routes');

mongoose.connect('mongodb://localhost', function(err){
    if(err) throw err;
    
    var app = express();
    
    routes(app);
    
    app.listen(3000, function(){
        console.log('Listening on http://localhost:3000 ...');
    })
    
})