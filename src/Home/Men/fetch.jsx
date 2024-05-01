import { useEffect, useState, useContext } from "react";
import "./men.css";
import { Link } from "react-router-dom";
import { ForMensCoded } from "./MenHardCoded";

import {
  productNames,
  productsPicture,
  productPrice,
} from "../newArrivalProduct";

const FetchProducts = ({ products, loading }) => {
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

          {products.slice(0, 5).map((product) => (
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

const Products = () => {
  return (
    <div className="products-for-men">
      {productNames.slice(0, 8).map((productName, index) => (
        <Link
          to={"/coded/" + productName} // Link to the 'coded/:name' route with the product name
          key={index}
          className="indivualProcuts"
        >
          <div className="product-img-div">
            <img
              className="img-products"
              src={productsPicture[index]}
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

function removeSpaces(url) {
  return encodeURIComponent(decodeURIComponent(url).replace(/\s+/g, ""));
}

export default FetchProducts;
