const http = require("http");
const express = require("express");


const app = express();
const port = 8000;

const server = http.createServer(app);

http.createServer(app);



const name = "builder"

app.get("/", (req, res) =>{
    res.send("<h1> Hello World</h1>")

});
app.get("/hello", (req, res) =>{
    res.send("<h1> Hello, You</h1>")

});

app.get("/hello:name", (req, res) =>{
    res.send(`<h1> Hello ${name}</h1>`);
});

server.listen(port, `localhost`, () => console.log(`listening on port ${8000}`));