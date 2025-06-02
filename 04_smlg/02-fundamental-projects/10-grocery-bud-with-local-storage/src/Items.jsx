import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          removeItem={removeItem}
          editItem={editItem}
          item={item}
        />
      ))}
    </div>
  );
};

export default Items;
