import { useParams } from "react-router-dom";
import { products } from "../data/data";

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId));
  return (
    <div>
      {product ? (
        <>
          <h1>Product: {product.name}</h1>
          <p>Price: {product.price}$</p>
          <img
            src={product.img}
            alt={product.name}
            style={{ width: "300px" }}
          />
        </>
      ) : (
        <p>Product not found 😔😞😟</p>
      )}
    </div>
  );
}
export default ProductDetails;
