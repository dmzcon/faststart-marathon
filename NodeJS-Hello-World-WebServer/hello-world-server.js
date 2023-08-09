const http = require("http");

const listenaddr = "0.0.0.0";
const port = 20000;

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);

server.listen(port,listenaddr, () => {
        console.log(`Hello World server listening at ${listenaddr}:${port}`);
});
