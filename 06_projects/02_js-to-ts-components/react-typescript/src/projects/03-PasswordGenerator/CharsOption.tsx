type CharsOptionType = {
  type: string;
  checked: boolean;
  onChange: () => void;
};

const CharsOption = ({ type, checked, onChange }: CharsOptionType) => {
  return (
    <div className="flex gap-1">
      <input
        id="uppercase"
        type="checkbox"
        name="uppercase"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="uppercase" className="capitalize">
        {type}
      </label>
    </div>
  );
};

export default CharsOption;
