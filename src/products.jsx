import { useState } from "react";

function Products() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Safari" },
    { id: 2, name: "AI Assistant" },
    { id: 3, name: "Laptop" },
    { id: 4, name: "Phone" },
  ];

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {visibleProducts.map((product) => (
        <div key={product.id}>
          {product.name}
        </div>
      ))}
    </div>
  );
}

export default Products;