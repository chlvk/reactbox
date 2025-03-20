import { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [images, setImages] = useState([]);

  async function handleSubmit(term) {
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
