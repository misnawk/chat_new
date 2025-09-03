import Chat from "./Chat";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button style={{ margin: "10px" }} onClick={() => navigate("/chat")}>
        1대1 채팅방
      </button>
      <button style={{ margin: "10px" }} onClick={() => navigate("/allChat")}>
        단체 채팅방
      </button>
    </div>
  );
}
