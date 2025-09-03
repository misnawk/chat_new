import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./page/main";
import Chat from "./page/oneChat";
import AllChat from "./page/allChat";
import OneChat from "./page/oneChat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/AllChat" element={<AllChat />} />
      <Route path="OneChat" element={<OneChat />} />
    </Routes>
  );
}

export default App;
