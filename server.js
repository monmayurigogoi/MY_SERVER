const http = require("http");

const server = http.createServer((req, res) => {

    // GET REQUEST
    if(req.method === "GET"){

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "GET Request Working"
        }));

    }

    // POST REQUEST
    else if(req.method === "POST"){

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

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});