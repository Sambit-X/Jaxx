
import http from "node:http"

const PORT = process.env.PORT || 5000;
const path = "./index.html"
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end("./index.html");
});

server.listen(PORT,() => {
  console.log(`Server running at ${PORT}`);
});