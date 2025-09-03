export default function OneChat() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>1대1 채팅</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          border: "1px solid black",
          padding: "10px",
          width: "500px",
          height: "500px",
        }}
      ></div>
      <div>
        <input type="text" placeholder="메시지를 입력하세요" />
        <button>전송</button>
      </div>
    </div>
  );
}
