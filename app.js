const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require("./models/User")
const bodyParser = require('body-parser');
const passport = require('passport');

// const { MongoClient } = require('mongodb');
// const uri = 
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect().then((response) => {
//     console.log("CONNECTED!!!!")
//     console.log(response)
// }).catch((err) => {
//     console.log(err)
// })
// client.connect(err => {
//   const collection = client.db("twitter-clone").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to mongoDB"))
.catch(err => console.log(err))

app.get("/", (req, res) => res.send("Hello Mickey"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));  //respond to req from other software like postman
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/tweets", tweets);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

