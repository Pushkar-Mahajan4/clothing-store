import CategoryItem from "./resources/components/category-item";

const App = () => {
  const categories = require("./resources/components/category-data/categories.json");
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default App;
