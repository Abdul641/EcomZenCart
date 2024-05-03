import { useState, useContext, useEffect } from "react";
import "../index.css";
import { Outlet, Link } from "react-router-dom";
import { Footer } from "./footer";
import { ShopContext } from "../router";
import { productInCart } from "../router";
import { totalPrice } from "../router";

export function numberOfProductsInCart() {
  return productInCart.length;
}
export function NavBar() {
  const { productInCart } = useContext(ShopContext);

  return (
    <>
      <nav>
        <div className="nav">
          {/* Left Side */}
          <div className="left-side">
            <ul>
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/kids">Kids</Link>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <div className="logo">
            <h1 className="font-black text-3xl">
              {/* ZenCart */}
              <Link to="/">ZenCart</Link>
            </h1>
          </div>
          {/* Right Side */}
          <div className="right-side">
            <ul className="cart-sign">
              <Cart />
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <br></br>
      <br></br>
      {/* Home */}
      <div className="home-section">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

const countItemsInCart = () => {
  return productInCart.length;
};

function Cart() {
  const { productInCart } = useContext(ShopContext);

  return (
    <>
      <Link to="cart">
        <div className="cart-number">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
          </svg>
          <p className="number-in-cart">
            {productInCart.length > 0 && <p>{productInCart.length}</p>}
          </p>
        </div>
      </Link>
    </>
  );
}
