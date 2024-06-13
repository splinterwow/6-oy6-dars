import { Link } from "react-router-dom";

function ProductCart({ product: { title, id, brand, availabilityStatus, description, category, thumbnail, price } }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Link to={`/product/${id}`}>
        <figure>
          <img src={thumbnail} alt={title} />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <p>Description: {description}</p>
        <p>Brand: {brand}</p>
        <p>Category: {category}</p>
        <div className="card-actions justify-end">
          <Link to={`/product/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
