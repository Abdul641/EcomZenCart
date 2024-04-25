import "./cartDetail.css";
import { Link } from "react-router-dom";
export function CartDetail({ productInCart }) {
  return (
    <>
      <div>
        <div>
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
              <div key={index}>
                <img className="img-products" src={item.images} />
                <h2>{item.title}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
