// dependencies
const express = require("express");

const apiRoutes = require('/routes/apiRoutes');
const htmlRoutes = require('/routes/htmlRoutes');

const app = express();
//define port to listen for incoming requests
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//server-side log for when our server is started
app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`)
})