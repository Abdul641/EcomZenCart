// import "./men.css";
import { Link } from "react-router-dom";
import { ForWomenCoded } from "./ForWomenCoded";
const FetchWomenProducts = ({ products, loading }) => {
  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="products-for-men">
          <ForWomenCoded />
          {products.slice(6, 11).map((product) => (
            <div className="indivualProcuts" key={product.node.id}>
              <Link key={product.node.id} to={"/" + product.node.title}>
                <div className="product-img-div">
                  <img
                    className="img-products"
                    src={product.node.featuredImage.url}
                    alt={product.node.title}
                  />
                </div>
                <div className="product-content">
                  <h2 className="product-title">{product.node.title}</h2>
                  <h2 className="product-price">
                    ${product.node.variants.edges[0].node.price.amount}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
// women 6 - 11
// Kids
export default FetchWomenProducts;
