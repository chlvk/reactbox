export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🤔</em>
      </p>
    );
  const itemsCount = items.length;
  const packedItemsCount = items.filter((item) => item.packed).length;
  const packedItemsPercentage = Math.round(
    (packedItemsCount / itemsCount) * 100
  );
  return (
    <footer className="stats">
      <em>
        {packedItemsPercentage === 100
          ? "You've got everything! Ready to go! 😘"
          : `😎 You have ${itemsCount} items on your list, and you already packed
        ${packedItemsCount} (${packedItemsPercentage}%)`}
      </em>
    </footer>
  );
}
