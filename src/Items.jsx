import React from 'react'
import { menuItems } from './data/menu.js'
import './index.css'

function Items({ activeCategory }){
    
    const filteredItems = activeCategory === 'ALL' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
    
    
    return(
        <>
        <div className="menu-section">
            {filteredItems.map(item => (
            <div key={item.id} className='card'>
                <div>
                    <img src={item.image}/>
                    <div className='menu-name'>{item.name}</div>
                    <div className="price">₱{item.price.toFixed(2)}</div>
                    <button>ORDER</button>
                </div>
            </div>
            ))}
        </div>
        
        </>
    )
}
export default Items