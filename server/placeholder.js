const http = require("node:http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      service: "queueapp-server",
      status: "ok",
      week: 1,
      message: "QueueApp server placeholder is running.",
    })
  );
});

server.listen(PORT, () => {
  console.log(`QueueApp server listening on port ${PORT}`);
});
