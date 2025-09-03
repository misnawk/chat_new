import { Route, Routes } from "react-router-dom";
import Main from "./page/main";
import OneChat from "./page/oneChat";
import AllChat from "./page/allChat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/allChat" element={<AllChat />} />
      <Route path="/oneChat" element={<OneChat />} />
    </Routes>
  );
}

export default App;
