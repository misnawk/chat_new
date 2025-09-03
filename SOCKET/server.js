const http = require("http");
const express = require("express");
const { WebSocketServer } = require("ws");
const PORT = process.env.PORT || 8089;
const app = express();
const server = http.createServer(app);

// 기본 루트 경로에 index.html 파일을 보내준다.
app.use("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// WebSocket 서버를 HTTP 서버에 연결
const wss = new WebSocketServer({ server });

// 하나의 서버로 포트 열기
server.listen(PORT, () => {
  console.log(`HTTP/WebSocket 서버가 포트 ${PORT}에서 실행 중입니다.`);
});

wss.on("connection", (ws, req) => {
  console.log("새로운 클라이언트가 연결되었습니다.");

  ws.on("message", (msg) => {
    console.log("유저가 보낸 메시지: ", msg.toString());

    // 모든 연결된 클라이언트에게 메시지 브로드캐스트
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        // WebSocket.OPEN
        client.send(msg.toString());
      }
    });
  });

  ws.on("close", () => {
    console.log("클라이언트 연결이 해제되었습니다.");
  });

  ws.on("error", (error) => {
    console.log("WebSocket 에러:", error);
  });
});
