const express = require('express');
console.log("This is the express",typeof express);

const app = express();

app.get('/', (req,res) => { 
	res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

