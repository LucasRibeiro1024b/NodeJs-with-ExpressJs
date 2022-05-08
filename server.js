const express = require("express");
const app = express();

app.get("/", function(req, res) {
    // console.log(request);
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: lucasribeiro1024b@gmail.com");
});

app.get("/about", function(req, res){
    let about = "My name is Lucas and I love to learn languages.";
    res.send(about);
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Languages</li><li>Jesus</li><li>Computers</li></ul>");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});