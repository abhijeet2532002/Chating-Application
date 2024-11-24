import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRouter from "./router/AuthRouter";
import MessageRouter from "./router/MessageRouter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/user/*" element={<MessageRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
