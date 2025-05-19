import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Hero from './Hero.jsx';
import Menu from './Menu.jsx';
import Login from './login.jsx';
import AdminDashboard from './AdminDashboard.jsx';

// Protected route component
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';
  
  return isAuthenticated ? element : <Navigate to="/admin-login" replace />;
};

function App() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);  
  };

  return (
    <Router>
      <Routes>
        {/* Hidden login route */}
        <Route path="/admin-login" element={<Login />} />
        
        {/* hidden adm route*/}
        <Route 
          path="/admin-dashboard" 
          element={<ProtectedRoute element={<AdminDashboard />} />} 
        />
        
        {/* Main application routes */}
        <Route path="/" element={
          <>
            <div className='header'>
              <b>Quadro's <span>Pizza</span></b>
            </div>
            <Hero />
            <Menu 
              activeCategory={activeCategory} 
              onCategoryChange={handleCategoryChange} 
            />
          </>
        } />
        
        {/* Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;