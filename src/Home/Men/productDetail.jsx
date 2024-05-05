import { Link, useParams } from "react-router-dom";
import "./detail.css";
import "/src/index.css";
import { useContext, useState } from "react";
import { ShopContext } from "../../../src/router";

export default function ProductDetail({ products }) {
  const { addToCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  const { title } = useParams();
  const product = products.find((product) => product.node.title === title);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <>
      <br></br>
      <div className="full-detail">
        {/* Images */}

        <div className="productAndDiscription">
          <div className="individualProduct-detail" key={product.node.id}>
            <div className="individual-product-img-div">
              <img
                className="img-products"
                src={product.node.featuredImage.url}
                alt={product.node.title}
              />
            </div>
          </div>
          {/* Content */}
          <div className="product-content-detail">
            <h2 className="product-title-detail">{product.node.title}</h2>
            <h2 className="product-description-detail">
              {product.node.description}
            </h2>
            <h2 className="product-price-detail">
              Price
              <span className="price-color">
                ${product.node.variants.edges[0].node.price.amount}
              </span>
            </h2>
          </div>
        </div>

        {/* Payment Section */}
        <div className="product-payment-detail">
          {/* Upper Part */}
          <div className="upperPart">
            <h2 className="product-price-detail">
              Price
              <span className="price-color">
                ${product.node.variants.edges[0].node.price.amount}
              </span>
            </h2>
            <h2 className="FreeReturns">Free Returns</h2>
            <h2 className="InStock">In Stock</h2>
          </div>

          {/* Quantity */}
          <div className="lower-part">
            <div className="quantity-div">
              <button disabled={quantity === 1} onClick={decreaseQuantity}>
                -
              </button>
              <span>Quantity: {quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            {/* Add to cart */}
            <button onClick={handleAddToCart} className="add-to-cart">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

//  Free returns line --- < Return this item for free > You can return this item for any reason: no shipping charges. The item must be returned in new and unused condition.
