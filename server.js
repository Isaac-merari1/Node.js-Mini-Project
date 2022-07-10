#!/usr/bin/node

// shebang

// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World \n This i my first work on Node JS \n Let's get ready to RAmbooo!!!");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// process.exit(1)

// may times Node.js we start servers

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hi!!, Knowledge is Power :)");
});
const server = app.listen(3000, () => console.log("Server ready"));

// process.on('SIGTERM', () => {
//     server.close(() => {
//       console.log('Process terminated')
//     })
//   })
