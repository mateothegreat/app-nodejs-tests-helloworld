const express = require('express');

const PORT = 8080;
const app = express();

app.get('/testuser', function (req, res){
    
  const myobj = {
      
      username: 'johndoe',
      userid: 123
      
  };
    
  res.send(myobj);
  
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
