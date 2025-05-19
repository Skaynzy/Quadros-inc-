import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './index.css';
import DashboardContent from './DashboardContent';
import OrdersContent from './OrdersContent';
import MenuAdmin from './MenuAdmin';

// Custom hook for auth protection
function useAuthProtection() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is authenticated
    if (localStorage.getItem('authenticated') !== 'true') {
      // Redirect to login page if not authenticated
      navigate('/admin-login');
    }
  }, [navigate]);
  
  const logout = () => {
    localStorage.removeItem('authenticated');
    navigate('/admin-login');
  };
  
  return { logout };
}

function AdminDashboard() {
  const { logout } = useAuthProtection();
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Quadro's Pizza Admin Dashboard</h1>
        <div className="admin-nav">
          <Link to="/" className="view-site">View Website</Link>
          <button onClick={logout} className="logout-button">Logout</button>
        </div>
      </div>
      
      <div className="admin-content">
        <div className="admin-sidebar">
          <ul>
            {['Dashboard', 'Orders', 'Menu Items', 'Employees',].map((tab) => (
              <li 
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="admin-main">
          {activeTab === 'Dashboard' && <DashboardContent />}
          {activeTab === 'Orders' && <OrdersContent />}
          {activeTab === 'Menu Items' && <MenuAdmin />}
          {activeTab === 'Employees' && <div className="placeholder-content">The List of employees of quadro's pizza will be shown here</div>}
        </div>
      </div>
    </div>
  );
}



export default AdminDashboard;