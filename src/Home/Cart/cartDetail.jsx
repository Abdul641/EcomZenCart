import "./cartDetail.css";
import { Link } from "react-router-dom";

function roundToNearestTen(number) {
  return Math.ceil(number);
}

export function CartDetail({ productInCart, totalCost }) {
  return (
    <>
      <br></br>

      <div className="cart-detail-main-container">
        <div className="cart-detail-container">
          {productInCart.length === 0 ? (
            <div className="Empty-cart">
              <p className="No-Items">Cart is Empty</p>
              <p className="click-here">
                Looks Like you have no items in your shopping Cart
              </p>
              <p className="click-here">
                Click{" "}
                <Link className="Back-to-home" to="/">
                  here
                </Link>{" "}
                to continue shopping
              </p>
            </div>
          ) : (
            productInCart.map((item, index) => (
              <div className="left-side" key={index}>
                <Link className="single-product" to={"/" + item.title}>
                  <img className="img-cart-products" src={item.images} />
                  <div className="single-products-description">
                    <h2 className="item-title">{item.title}</h2>
                    <p className="item-price">Price: ${item.price}</p>
                    <p className="item-quantity">Quantity: {item.quantity}</p>
                    <h2 className="item-description">{item.description}</h2>
                  </div>
                  <br></br>
                </Link>
              </div>
            ))
          )}
        </div>
        <div className="checkout-section">
          {productInCart.length === 0 ? null : (
            <CheckoutSection
              productCart={productInCart}
              totalCost={totalCost}
            />
          )}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      {/* <div className="checkout-section">
        <CheckoutSection totalCost={totalCost} />
      </div> */}
    </>
  );
}

export function CheckoutSection({ productCart, totalCost }) {
  return (
    <>
      <div className="total">
        <h1 className="sub-total">
          Subtotal <span className="product-length">{productCart.length} </span>{" "}
          items: <span className="price"> ${roundToNearestTen(totalCost)}</span>
        </h1>
        <button className="proceed-to-checkout">Proceed to checkout</button>
      </div>
    </>
  );
}
