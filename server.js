const http = require("http");

const server = http.createServer((req, res) => {

    // GET REQUEST
    if (req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "GET Request Working"
        }));

    }

    // POST REQUEST
    else if (req.method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const data = JSON.parse(body);

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: "POST Request Working",
                receivedData: data
            }));

        });

    }

    // WRONG ROUTE
    else {

        res.writeHead(404, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "Route Not Found"
        }));

    }

});

// IMPORTANT FOR RAILWAY HOSTING
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});