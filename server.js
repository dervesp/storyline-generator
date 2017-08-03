const express = require("express");
const http = require("http");
const path = require("path");

const PORT = 3000;

const app = express();
app.use("/", express.static(path.join(__dirname, "./bin")));
const server = http.createServer(app);

server.listen(PORT, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", PORT, PORT);
    }
});