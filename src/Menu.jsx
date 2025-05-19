import './index.css'
import Items from './Items.jsx'
const categories = ['ALL', 'PIZZA', 'QUADRO SPECIAL', 'BURGER', 'DRINKS','BREAKFAST','SPAGETTI','DESSERT'];



function Menu({activeCategory, onCategoryChange}){
    return(
        <>
        <div className='menu-text'><b>MENU</b></div>
        <div className='category-btn'>
            {categories.map((category, index) => <button key={index}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => onCategoryChange(category)}>
                <b>{category}</b>
            </button>)}
        </div>
        <Items activeCategory={activeCategory}/>
        </>
    )
}
export default Menu