import { Link } from "react-router-dom";

function ProductsPage() {
  return (
    <div>
      <Link to={"/product/hdd"}>Product 1 (HDD)</Link>
      <Link to={"/product/ssd"}>Product 2 (SSD)</Link>
      <Link to={"/product/ram"}>Product 3 (RAM)</Link>
    </div>
  );
}

export default ProductsPage;
