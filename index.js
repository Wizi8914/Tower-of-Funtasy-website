const express = require('express');
const path = require('path');
const app = express();
require("dotenv").config()

app.use(express.static(__dirname + "/public"));


app.get("/stats", (req, res) => {
    fetch(process.env.STATS_API)
        .then(response => response.json())
        .then(data => {
        
        res.send(data);
    })
    .catch(err => {
        console.error("Error fetching bot Stats: ", err);
    });
})

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"))
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server running...")
})