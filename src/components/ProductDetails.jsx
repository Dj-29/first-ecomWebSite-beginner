import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const addToCarte = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/" + id);
      if (!res.ok) return;
      const data = await res.json();
      setProduct(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-details">
      <h2>Product Details for ID: {id}</h2>
      {product && (
        <>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#f0c040",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={addToCarte}
          >
            Add to Cart
          </button>
        </>
      )}
    </div>
  );
};
