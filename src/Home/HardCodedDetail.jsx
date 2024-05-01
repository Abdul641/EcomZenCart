import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  productNames,
  productDescriptions,
  productsPicture,
  productPrice,
} from "./newArrivalProduct";
import { productInCart } from "../router";
import { numberOfProductsInCart } from "./navbar";
import { totalPrice, findingTotalPrice } from "../router";
import "./HardCoded.css";

export const addToCartHard = (product, quantity) => {
  numberOfProductsInCart();
  let cartProduct = {
    description: product.description,
    title: product.title,
    price: product.price,
    quantity: quantity,
    images: product.image,
  };
  const existingProductIndex = productInCart.findIndex(
    (item) => item.title === cartProduct.title
  );
  if (existingProductIndex !== -1) {
    productInCart[existingProductIndex].quantity += quantity;
  } else {
    productInCart.push(cartProduct);
  }
  totalPrice[0] = findingTotalPrice();
};

export default function ProductCodedDetail() {
  const [quantity, setQuantity] = useState(1);
  const { name } = useParams();

  const index = productNames.findIndex((productName) => productName === name);

  if (index === -1) {
    return <div>Product not found</div>;
  }

  const priceWithDollarSign = productPrice[index];
  const priceWithoutDollarSign = priceWithDollarSign.replace("$", "");

  const product = {
    title: productNames[index],
    description: productDescriptions[index],
    image: productsPicture[index],
    price: priceWithoutDollarSign,
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCartHard(product, quantity);
    console.log(productInCart);
  };

  return (
    <>
      <br />
      <div className="full-detail">
        {/* Images */}
        <div className="individualProduct-detail">
          <div className="individual-product-img-div">
            <img
              className="img-products"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>
        {/* Content */}
        <div className="product-content-detail">
          <h2 className="product-title-detail">{product.title}</h2>
          <h2 className="product-description-detail">{product.description}</h2>
          <h2 className="product-price-detail">
            Price <span className="price-color">$ {product.price}</span>
          </h2>
        </div>
        {/* Payment Section */}
        <div className="product-payment-detail">
          {/* Upper Part */}
          <div className="upperPart">
            <h2 className="product-price-detail">
              Price <span className="price-color">$ {product.price}</span>
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
