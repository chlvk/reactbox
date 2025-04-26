import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import Title from "./Title";
import data from "./data";
//
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories
          categories={categories}
          filterItems={filterItems}
          activeCategory={activeCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
