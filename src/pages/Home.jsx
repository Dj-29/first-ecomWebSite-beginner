import React, { useEffect, useState } from "react";
import { Filter } from "../components/Filter";

export const Home = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

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

  return (
    <>
      <div className="nav">
        <div className="logo">
          <h2>Fake ecom website</h2>
        </div>
      </div>
      <Filter
        categories={categories}
        filter={(cat) => {
          if (cat === "all") {
            fetchProducts();
          } else {
            setItems((prev) => prev.filter((item) => item.category === cat));
          }
        }}
      />
      <div className="products">
        {items.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>${item.price} </p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};
