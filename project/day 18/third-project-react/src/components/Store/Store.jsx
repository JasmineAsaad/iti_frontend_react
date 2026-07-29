import { useState } from "react";
import ProductCard from "./ProductCard";

export default function Store() {
  const [products, setProducts] = useState([
    { id: 1, name: "RED FLOWER", price: 100, count: 200, onSale: true },
    { id: 2, name: "WHITE FLOWER", price: 200, count: 300, onSale: false },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addProduct(e) {
    e.preventDefault();
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      count: 0,
      onSale: false,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  }

  function deleteProduct(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  return (
    <div>
      <h2>Store</h2>
      <p className="text-muted">
        Example of <code>useState</code>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta maiores.
      </p>

      <form className="row g-9 mb-5" onSubmit={addProduct}>
        <div className="col-auto">
          <input
            className="form-control"
            placeholder="enter your name of product"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col- ">
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </div>
      </form>

      <div className="row">
        {products.length === 0 && <p>No products available now</p>}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={deleteProduct} />
        ))}
      </div>
    </div>
  );
}