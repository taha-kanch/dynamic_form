const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;

app.get('/getForm', (req, res) => {

const data = JSON.parse(fs.readFileSync('form.json', 'utf8'));
res.json(data);

});

app.listen(port, (err) => {
if(err) {
return console.log(`Some error: ${err}`);
}
console.log(`Server is running on port ${port}`)
});