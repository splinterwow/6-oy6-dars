// react router dom imports
import { useParams } from "react-router-dom";
// costum hooks
import { useFetch } from "../hooks/useFetch";
function Product() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/products/` + id
  );
  console.log(data);
  return (
    <div>
      {isPending && <h3>Loading...</h3>}
      {data && (
        <div>
          <img src={data.thumbnail} alt={data.title} />
          <h2>Title: {data.title}</h2>
          <p>Price: {data.price}</p>
          <p> Description: {data.description}</p>
          <p>Status: {data.availabilityStatus}</p>
          <h4>returnPolicy: {data.returnPolicy}</h4>
          <h3>warrantyInformation: {data.warrantyInformation}</h3>

          <div>
            <div className="bagde badge-outline">Brand: {data.brand}</div>
            <h2 className="badge badge-outline">
              {data.rating}{" "}
              {
                <div className="rating">
                  <h3 className="-ml-8">Rating: </h3>
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
              }
            </h2>
          </div>
        </div>
      )}

      <div className="mt-3">
        <button className="btn btn-secondary">-</button>
        <span>0</span>
        <button className="btn btn-secondary">+</button>
      </div>
    </div>
  );
}

export default Product;
