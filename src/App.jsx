// App.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css';
import UserPage from './pages/user';
import DynamicRedirect from './pages/DynamicRedirect';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DynamicRedirect />} />
      <Route path="/partisipant/:id" element={<UserPage />} />
    </Routes>
  );
}

export default App;
