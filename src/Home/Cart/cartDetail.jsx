import "./cartDetail.css";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../router";

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
              <br></br>
              <br></br>
              <br></br>
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
                <DeleteSVG removeFromCart={removeFromCart} />
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
        <button onClick={showingMessage} className="proceed-to-checkout">
          Proceed to checkout
        </button>
      </div>
    </>
  );
}

function DeleteSVG({ removeFromCart }) {
  return (
    <>
      <div onClick={removeFromCart} className="delete">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      </div>
    </>
  );
}

function showingMessage() {
  alert("If this was a real website you would have made a purchase.");
}
