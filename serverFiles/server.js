
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    url: [], // solving cors error
  },
});
io.on("connect", (socket) => {
  // sanity check
  console.log(socket.id, " has connencted");
  socket.emit("wordSent", {
    word: fiveLetterWordsByLetter[
      Math.floor(Math.random() * fiveLetterWordsByLetter.length)
    ],
  });
  socket.on("disconnect", (reason) => {
    console.log(socket.id, "has disconnnected!");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/* 











*/
const fiveLetterWordsByLetter = [
  // 6 words starting with A
  "about",
  "above",
  "abuse",
  "actor",
  "acute",
  "admit",
  // 6 words starting with B
  "baker",
  "bases",
  "basic",
  "basis",
  "beach",
  "began",
  // 6 words starting with C
  "cable",
  "carry",
  "catch",
  "cause",
  "chain",
  "chair",
  // 6 words starting with D
  "daily",
  "dance",
  "death",
  "delay",
  "depth",
  "doing",
  // 6 words starting with E
  "eagle",
  "early",
  "earth",
  "eight",
  "entry",
  "event",
  // 6 words starting with F
  "faith",
  "false",
  "fault",
  "field",
  "fight",
  "final",
  // 6 words starting with G
  "giant",
  "glass",
  "globe",
  "going",
  "grape",
  "grass",
  // 6 words starting with H
  "habit",
  "happy",
  "heart",
  "hello",
  "honey",
  "horse",
  // 6 words starting with I
  "image",
  "imply",
  "index",
  "inner",
  "issue",
  "ivory",
  // 6 words starting with J
  "jelly",
  "joint",
  "jolly",
  "judge",
  "juice",
  "julio",
  // 6 words starting with K
  "knife",
  "knock",
  "known",
  "knees",
  "kinds",
  "kitty",
  // 6 words starting with L
  "label",
  "labor",
  "large",
  "laser",
  "laugh",
  "learn",
  // 6 words starting with M
  "magic",
  "major",
  "maker",
  "march",
  "match",
  "money",
  // 6 words starting with N
  "naked",
  "nasty",
  "naval",
  "nerve",
  "never",
  "night",
  // 6 words starting with O
  "ocean",
  "offer",
  "often",
  "order",
  "organ",
  "other",
  // 6 words starting with P
  "party",
  "peace",
  "phone",
  "place",
  "plain",
  "plane",
  // 6 words starting with Q
  "quiet",
  "queen",
  "query",
  "quick",
  "quirk",
  "quote",
  // 6 words starting with R
  "radio",
  "reach",
  "ready",
  "realm",
  "river",
  "roast",
  // 6 words starting with S
  "scale",
  "score",
  "sense",
  "shape",
  "share",
  "shift",
  // 6 words starting with T
  "table",
  "taken",
  "taste",
  "teach",
  "teeth",
  "think",
  // 6 words starting with U
  "union",
  "unity",
  "upper",
  "upset",
  "urban",
  "usage",
  // 6 words starting with V
  "value",
  "venue",
  "verse",
  "video",
  "vital",
  "voice",
  // 6 words starting with W
  "wagon",
  "waste",
  "watch",
  "water",
  "weigh",
  "wheel",
  // 6 words starting with X
  "xenon",
  "xerox",
  "xylem",
  "xylic",
  "xenial",
  "xylan",
  // 6 words starting with Y
  "young",
  "yacht",
  "yearn",
  "yield",
  "yodel",
  "yummy",
  // 6 words starting with Z
  "zebra",
  "zesty",
  "zilch",
  "zonal",
  "zippy",
  "zowie",
];
