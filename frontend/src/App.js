import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";
import ChatDetailsPage from "./pages/ChatDetailsPage";
import PrivateRoute from "./routes/PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SUCCESS } from "./redux/constants/UserConstants";

function App() {
  // const {user} = useSelector((state) => state.user.login)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/:id" element={<ChatDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
