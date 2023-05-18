
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'

import AuthPage from './pages/AuthPage';
import ChatPage from './pages/ChatPage';
import ChatDetailsPage from './pages/ChatDetailsPage';
import PrivateRoute from './routes/PrivateRoute';
function App() {
  return (
 <Router>
  <Routes>
    <Route index path='/login' element={<AuthPage />} />

    {/* Private Route */}
    <Route path='/chat' element={<PrivateRoute>
      <ChatPage />
      </PrivateRoute>} />
    <Route path='/chat/:id' element={<ChatDetailsPage />} />
  </Routes>
 </Router>
  );
}

export default App;
