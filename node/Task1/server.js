const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head><title>Personal Intro Page</title></head>
        <body>
          <h1>Ahmed Abbas</h1>
          <p><strong>Field of Study:</strong> Computer Science</p>
          <p><strong>Message:</strong> Suiiii</p>
          <a href="/api">API</a>
        </body>
      </html>
    `);
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      name: "Ahmed",
      field: "Computer Science",
      goal: "backend developer",
      message: "Slow steps , but still steps"
    }));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));
// http://localhost:3000/