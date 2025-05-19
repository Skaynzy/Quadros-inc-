import './index.css';
// Orders Tab Content
function OrdersContent() {
  return (
    <div className="orders-section">
      <div className="section-header">
        <h2>All Orders</h2>
        <div className="filters">
          <select className="filter-select">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
          <input type="text" placeholder="Search orders..." className="search-input" />
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      
    </div>
  );
}

export default OrdersContent;