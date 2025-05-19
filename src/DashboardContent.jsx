import './index.css';
// Dashboard Tab Content
function DashboardContent() {
  return (
    <>
      <div className="admin-stats">
        <div className="stat-card">
          <h3>Today's Orders</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>Today's Revenue</h3>
          <p className="stat-number">₱0</p>
        </div>
        <div className="stat-card">
          <h3>Active Menu Items</h3>
          <p className="stat-number">22</p>
        </div>
        <div className="stat-card">
          <h3>Revenue this month</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>This Month's total order</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>This Month's most ordered menu</h3>
          <p className="stat-number">---</p>
        </div>
        <div className="stat-card">
          <h3>This Year's Revenue</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>This Year's total order</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="stat-card">
          <h3>This Year's most ordered menu</h3>
          <p className="stat-number">---</p>
        </div>
      </div>
    </>
  );
}
export default DashboardContent;