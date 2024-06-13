import React from "react";
import { useFetch } from "../hooks/useFetch";
import ProductCart from "../components/ProductCard";

function Home() {
  const { data, isPending, error } = useFetch('https://dummyjson.com/products');

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!data || !Array.isArray(data.products)) {
    return <div>No data available</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.products.map(item => (
        <ProductCart key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Home;
