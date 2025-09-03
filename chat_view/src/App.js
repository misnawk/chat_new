import "./App.css";
import AllChat from "./page/AllChat";
import Chat from "./page/Chat";
import Main from "./page/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/allChat" element={<AllChat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
