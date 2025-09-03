import { useState, useEffect, useRef } from "react";

const Chat = () => {
  // 필요한 변수들 총 6개 필요
  const [socket, setSocket] = useState(null); // WebSocket 객체
  const [username, setUsername] = useState(""); // 유저 이름
  const [messages, setMessages] = useState([]); // 메시지 배열
  const [input, setInput] = useState(""); // 입력 메시지
  const [isConnected, setIsConnected] = useState(false); // 연결 상태
  const messagesEndRef = useRef(null); // 자동스크롤

  // 소켓 자동연결 및 설정
  useEffect(() => {
    // WebSocket 자동 연결 설정
    const ws = new WebSocket("ws://localhost:8089");
    // ws 안에는 속성과 이벤트가 있다.
    setSocket(ws);

    // 연결 성공시
    ws.onopen = () => {
      setIsConnected(true);
      console.log("WebSocket 연결 성공");
    };

    // 연결 해제시
    ws.onerror = (error) => {
      setIsConnected(false);
      console.log("WebSocket 연결 실패", error);
    };

    // 메시지 수신시
    ws.onmessage = (event) => {
      // event.data 는 메시지 데이터
      const message = event.data;
      // 메시지 배열에 추가
      setMessages((prev) => [...prev, message]);
    };

    return () => ws.close();
  }, []);

  // 메시지 전송 함수
  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      socket.send(input);
      setInput("");
    }
  };

  return (
    <div>
      <h1>Chat</h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          height: "400px",
          overflowY: "scroll",
          marginBottom: "10px",
        }}
      >
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default Chat;
