const express = require('express');
const formidable = require('express-formidable');
const fs = require('fs');

const app = express();

// require stuff above

app.use(formidable());

// endpoint stuff below

app.use(express.static("public"));

fs.readFile(__dirname + '/data/posts.json', function (error, file) {
    console.log(file.toString());
    const parsedFile = JSON.parse(file);
});

app.post('/create-post', function (req, res) {
    console.log('/create-post');
    console.log(req.body);
    console.log(req.fields);
});

app.listen(3000, function () {
    console.log('Server is listening on port 3000. Ready to accept requests!')
});
