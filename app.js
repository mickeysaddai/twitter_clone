const mongoose = require('mongoose');
const express = require("express");
const app = express();

const db = require('./config/keys').mongoURI;

app.get("/", (req, res) => res.send("Hello"));
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server is running on port ${port}`));

