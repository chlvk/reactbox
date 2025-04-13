import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Cart page</h1>
      {/* <Link to={"/thanks"}>
        <button>Order</button>
      </Link> */}
      <button onClick={() => navigate("/thanks")}>
        Click me and redirect happens
      </button>
    </div>
  );
}

export default Cart;
