var http= require('http');

http.createServer(function(res,rep){

    var fs= require("fs");
    console.log("programe started");
    
    fs.readFile("data.txt",function(err,data){
    
        if(err) return console.error(err);
    
        console.log(data.toString());

    });
}).listen(1234);









