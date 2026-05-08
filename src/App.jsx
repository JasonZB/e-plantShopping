import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';
import AboutUs from './AboutUs';
import { useSelector } from 'react-redux';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector(state => state.cart.items);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  return (
    <div className="app-container">
      {/* Navbar fijo */}
      <div className="navbar">
        <div className="tag_home_link" onClick={handleHomeClick}>
          <h3>Paradise Nursery</h3>
        </div>
        <ul className="ul">
          <li><a href="#" onClick={handleHomeClick}>Home</a></li>
          <li><a href="#" onClick={handleGetStartedClick}>Plants</a></li>
          <li className="cart" onClick={() => setShowCart(true)}>
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart" width="40" />
            <div className="cart_quantity_count">{calculateTotalQuantity()}</div>
          </li>
        </ul>
      </div>

      {/* Landing Page */}
      {!showProductList && !showCart && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs/>
            </div>
          </div>
        </div>
      )}

      {/* Product List o Cart */}
      {showProductList && !showCart && <ProductList />}
      {showCart && <CartItem onContinueShopping={() => setShowCart(false)} />}
    </div>
  );
}

export default App;
