import "./Header.css";

const Header = ({
  query,
  setQuery,
  selectedMeal,
  setSelectedMeal,
  mealTypes,
  getData,
}) => {
  const submitSearch = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="header-warapper">
      <h1>Recipe App</h1>
      <form onSubmit={submitSearch} className="header-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          value={selectedMeal}
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealTypes.map((mealType) => (
            <option value={mealType} key={mealType}>
              {mealType}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;
