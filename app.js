const mongoose = require('mongoose');
const express = require("express");
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');
const app = express();

const db = require('./config/keys').mongoURI;

app.get("/", (req, res) => res.send("Hello"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

