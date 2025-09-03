import { Navigate, useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const onclick1 = () => {
    navigate("/oneChat");
  };

  const onclick2 = () => {
    navigate("/allChat");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <h1>채팅프로그램</h1>
      <button onClick={onclick1}>1대1 채팅 시작하기</button>
      <button onClick={onclick2}>그룹 채팅 시작하기</button>
    </div>
  );
}
