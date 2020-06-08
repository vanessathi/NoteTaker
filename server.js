const express = require("express");
const path = require("path")
const fs = require("fs")
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`)
})




// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "/public/notes.html"))
// });

// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "/public/index.html"))
// });


// app.get("/api/notes", function (req, res){
//     fs.readFile("db.json", "utf8", function(){

//     })
// })
