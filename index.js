var fs = require('fs');
var express = require("express");
var bodyParser = require("body-parser");
var data = fs.readFileSync('db/data.json');
var chats = JSON.parse(data);
const PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var server = app.listen(PORT, listening);

function listening() {
    console.log(`Server is listening on port ${PORT}!`);
}

app.use(express.static('public'));

//returns the whole chat data
app.get('/api/v1/chat', getChats);

//add a chat data
app.post('/api/v1/chat', addChat);

function getChats(request, response) {
    response.json(chats);
}

function addChat(request, response) {
    const time = new Date();
    const chat = {
        name: request.body.name,
        line: request.body.line
    };
    chats[time] = chat;
    var data = JSON.stringify(chatLines, null, 2);
    fs.writeFile('db/data.json', data, finished);

    function finished(err) {
        console.log('Writing complete');
        response.json(chat);
    }
}
