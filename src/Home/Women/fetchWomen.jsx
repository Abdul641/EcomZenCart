import { Link } from "react-router-dom";

import {
  productNames,
  productsPicture,
  productPrice,
} from "../newArrivalProduct";

const FetchWomenProducts = ({ products, loading }) => {
  return (
    <>
      {loading ? (
        <div className="loading-main">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="products-for-men">
          <Products />

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

const Products = () => {
  const slicedProductsPicture = productsPicture.slice(8, 12); // Slice productsPicture accordingly

  return (
    <div className="products-for-men">
      {productNames.slice(8, 12).map((productName, index) => (
        <Link
          to={"/coded/" + productName}
          key={index}
          className="indivualProcuts"
        >
          <div className="product-img-div">
            <img
              className="img-products"
              src={slicedProductsPicture[index]}
              alt={productName}
            />
          </div>
          <div className="product-content">
            <h1 className="product-title">{productName}</h1>
            <h2 className="product-price">{productPrice[index]}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default FetchWomenProducts;
