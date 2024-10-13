const Categories = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button className="btn" type="button" key={category}>
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
