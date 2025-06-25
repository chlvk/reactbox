const URL = "http://localhost:9000/products";

async function fetchProductLoader() {
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default fetchProductLoader;
