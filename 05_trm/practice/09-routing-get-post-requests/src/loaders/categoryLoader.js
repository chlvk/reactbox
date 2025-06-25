const URL = "http://localhost:9000/categories";

async function fetchCategoryLoader() {
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
}

export default fetchCategoryLoader;
