import ProductCard from "./component/ProductCard";
import products from "./product";
import "./App.css";

const App = () => {
  const firstName = "OP-Chells"; // Change this to your first name, or leave it blank to use the fallback message.

  return (
    <section>
      <div className="container">
        <div className="row">
          <ProductCard
            imageUrl={products.imageUrl}
            name={products.name}
            price={products.price}
            desciption={products.description}
          />
        </div>
      </div>
      <div className="text-center mt-4">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img
              src={`https://www.example.com/images/${firstName}.jpg`}
              alt="Profile"
              className="rounded-circle"
              style={{ width: 100, height: 100 }}
            />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </section>
  );
};

export default App;
