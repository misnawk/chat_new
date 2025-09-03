export default function index() {
  const socket = WebSocket("http://localhost:8089");
  return (
    <div>
      <h1>Socket.io</h1>
      <div>
        <div
          id="messages"
          style="width: 500px; height: 500px; border: 1px solid black"
        ></div>
      </div>
      <div>
        <input type="text" id="message" placeholder="메시지를 입력하세요" />
        <button id="send" onclick="socket.send(message.value)">
          메세지 보내기
        </button>
      </div>
    </div>
  );
}
