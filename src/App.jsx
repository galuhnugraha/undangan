import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserPage from './pages/user';
import DynamicRedirect from './pages/DynamicRedirect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DynamicRedirect />} />
        <Route path="/partisipant/:id" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
