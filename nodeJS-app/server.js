require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");
const path = require("path");

app.use(cors());
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// const apiMessages = [
//   { name: "Zee", message: "Hi gang" },
//   { name: "Paraic", message: "Hey whatsup" },
// ];

const MessageModel = require(".././nodeJS-app/server-side/db/models/messageModel");

const dBurl = process.env.DB_CONNECTION;

app.get("/messages", (req, res) => {
  MessageModel.find({}, (err, apiMessages) => {
    res.send(apiMessages);
  });
});

// app.post("/messages", (req, res) => {
//   const messageInputs = new MessageModel(req.body);

//   messageInputs.save((err) => {
//     if (err) sendStatus(500);

//     io.emit("message", req.body);
//     res.sendStatus(200);
//   });
// });

// io.on("connection", (socket) => {
//   console.log("user connected");
// });

mongoose.connect(
  dBurl,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (!error) {
      console.log("mongo-db connection working");
    } else {
      console.log("check mongo-db connection", error);
    }
  }
);
mongoose.Promise = global.Promise;

// const server = http.listen(5000, () => {
//   console.log("your-app listening on port", server.address().port);
// });

const server = http.listen(PORT, () =>
  console.log(`your-app listening on ${PORT}`)
);
