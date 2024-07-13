import React, { useState } from 'react';

const Cart = () => {
  const [cartCount, setCartCount] = useState(0);
  const [inCart, setInCart] = useState(false);

  const handleButtonClick = () => {
    if (inCart) {
      setCartCount(cartCount - 1);
    } else {
      setCartCount(cartCount + 1);
    }
    setInCart(!inCart);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        
      </button>
      <p>Items in Cart: {cartCount}</p>
    </div>
  );
};

export default Cart;
