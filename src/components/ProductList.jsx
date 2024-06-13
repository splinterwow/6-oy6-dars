// components
import ProductCart from "./ProductCart";

function ProductsList({ data }) {
  console.log(data);

  if (!data || !Array.isArray(data.products)) {
    return <div>No products available.</div>;
  }

  return (
    <div className="products-list">
      {data.products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
