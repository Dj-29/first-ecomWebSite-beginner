import React, { useEffect, useState } from "react";
import { Filter } from "../components/Filter";
import { Link } from "react-router-dom";
import { CartDrawer } from "../components/CartDrower";
import { CheckOut } from "./Checkout";
export const Home = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const addToCart = (item) => {
    console.log("Added to cart:", item);
  };

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setItems(data);

    const uniqueCategories = ["all", ...new Set(data.map((el) => el.category))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const filteredItems =
    selectedCat === "all"
      ? items
      : items.filter((el) => el.category === selectedCat);

  return (
    <>
      <div className="nav">
        <button onClick={() => setIsOpen(isOpen ? false : true)}>
          🛒 Cart
        </button>

        <div className="logo">
          <h2>Fake ecom website</h2>
        </div>
      </div>
      <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Filter categories={categories} setFilter={setSelectedCat} />
      <div className="products">
        {filteredItems.map((item) => (
          <Link to={`/product/${item.id}`}>
            <div className="product" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>${item.price} </p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
