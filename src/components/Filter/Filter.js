export const Filter = ({ value, onCnange }) => {
  return (
    <label htmlFor="filter">
      Find contact by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onCnange}
      />
    </label>
  );
};
