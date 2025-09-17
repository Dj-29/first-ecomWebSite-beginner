import { useEffect, useState } from "react";
import { CheckOut } from "../pages/Checkout";

export const CartDrawer = ({ isOpen, setIsOpen }) => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (index) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const filterdCart = cart.filter((el) => el.id != index);
    localStorage.setItem("cart", JSON.stringify(filterdCart));
    setCart(filterdCart);
  };
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  }, [isOpen]);
  const goToCheckout = () => {
    setIsOpen(true);
    <CheckOut isOpen={isOpen} setIsOpen={setIsOpen} />;
  };
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(false)}>Close</button>
      <h3>Pending Orders</h3>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100px",
                height: "100px",
              }}
              src={item.image}
              alt={item.title}
            />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <button className="checkout-button" onClick={() => goToCheckout()}>
              Checkout
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
