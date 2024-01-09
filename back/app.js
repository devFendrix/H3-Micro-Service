const express = require("express")
require("dotenv").config()

const port = 3001
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const routes = require("./area.route")

app.use(express.json())
app.use(cors())

mongoose
    .connect("mongodb://root:root@mongo:27017")
    .then(() => console.log("Connexion à la BDD Mongo"))
    .catch((error) => console.log(error))

app.use("/api", routes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});