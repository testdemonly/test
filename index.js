const express = require("express");
const path = require("path");
const app = express();

const port = process.env.port || 8080;

app.listen(port, ()=>{
    console.log("Started listening on", port);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});




