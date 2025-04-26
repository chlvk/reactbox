function Categories({ categories, filterItems, activeCategory }) {
  return (
    <div className="btn-container">
      {categories.map((item) => {
        return (
          <button
            type="button"
            className={`btn ${item === activeCategory && "btn-active"}`}
            key={item}
            onClick={() => filterItems(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
