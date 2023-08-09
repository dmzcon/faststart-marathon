const http = require("http");

const listenaddr = "127.0.0.1";
const port = 20000;

const requestListener = function (req, res) {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(`<html><body><h1>HELLO WORLD FROM FASTSTART MARATHON</h1></body></html>`);
};

const server = http.createServer(requestListener);

server.listen(port,listenaddr, () => {
        console.log(`Hello World server listening at ${listenaddr}:${port}`);
});
