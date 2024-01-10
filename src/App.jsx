
import { useState } from "react";
import { useEffect } from "react";
import "./app.css";
function App() {
  const [products, setProduct] = useState(null);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
    <div>Added Product : </div>
    <div className="grid-container product">
      {products !== null ? (
        <>
          {products.map((product) => (
            <div
              className="product-container"
              key={product.id}
            >
              <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <span>{product.productName}</span>
              </div>
              <div>
                <button className="button">Buy now</button>
              </div>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
    </div>
    </>
  );
}

export default App;
