import ProductCard from "./productcard"; 

export default async function Product() {
  try {
    const res = await fetch("https://dummyjson.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    const products = data.products;

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    );

  } catch (error) {
    return (
      <div style={{ textAlign: "center", color: "red", padding: 20 }}>
        <h1>Failed to load products</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}
