
const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send("Hello World from crud by faishal");
});

app.listen(3000 , () => {
    console.log('server on port 3000');
});