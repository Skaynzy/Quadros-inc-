import React, { useState } from 'react';
import { menuItems } from './data/menu.js';
import './index.css';

function MenuAdmin() {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  
  // Filter menu items based on selected category
  const filteredItems = activeCategory === 'All Categories' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
  
  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  return (
    <div className="menu-items-section">
      <div className="section-header">
        <h2>Menu Items</h2>
        <button className="add-button">+ Add New Category</button>
        <button className="add-button">+ Add New Item</button>
      </div>
      
      <div className="filters">
        <select 
          className="filter-select" 
          value={activeCategory} 
          onChange={handleCategoryChange}
        >
          <option>All Categories</option>
          <option>PIZZA</option>
          <option>QUADRO SPECIAL</option>
          <option>BURGER</option>
          <option>DRINKS</option>
          <option>BREAKFAST</option>
          <option>SPAGETTI</option>
          <option>DESSERT</option>
        </select>
      </div>
      
      <div className="menu-items-grid">
        {filteredItems.map((item) => (
          <div className="menu-item-card" key={item.id}>
            <div 
              className="menu-item-image" 
              style={{
                backgroundColor: "#f0f0f0", 
                height: "150px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center"
              }}
            >
              {item.image ? (
                <img src={''} alt={item.name} />
              ) : (
                "No Image"
              )}
            </div>
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p className="menu-item-category">{item.category}</p>
              <p className="menu-item-price">₱{item.price.toFixed(2)}</p>
            </div>
            <div className="menu-item-actions">
              <button className="action-btn edit">Edit</button>
              <button className="action-btn delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default MenuAdmin;