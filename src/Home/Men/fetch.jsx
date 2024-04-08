import React, { useEffect, useState } from "react";
import "./men.css";
const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const request = await fetch(
          "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
        );
        const response = await request.json();

        const productData = response.data.products.edges;
        setProducts(productData);
        setLoading(false); // Set loading to false when data is fetched
        console.log(
          response.data.products.edges[1].node.variants.edges[0].node.price
            .amount
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="products-for-men">
          {products.slice(0, 5).map((product) => (
            <div className="indivualProcuts" key={product.node.id}>
              <div className="product-img-div">
                <img
                  className="img-products"
                  src={product.node.featuredImage.url}
                  alt={product.node.title}
                />
              </div>
              <div className="product-content">
                <h2 className="product-title">{product.node.title}</h2>
                <h2 className="product-price"></h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FetchProducts;
