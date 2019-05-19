var express = require('express');

var PORT = 8080;
var app = express();

app.get('/testuser', function (req, res){
    
  const myobj = {
      
      username: 'johndoe',
      userid: 123
      
  };
    
  res.send(myobj);
  
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
