import { Link } from "react-router-dom";

export const Card = ({ item, addToCart }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div
        className="card"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        key={item.id}
      >
        <h4>{item.title}</h4>
        <p>${item.price} </p>
        <button
          onClick={() => addToCart(item)}
          style={{
            backgroundColor: "#ffcc00",
            border: "none",
            borderRadius: "5px",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};
