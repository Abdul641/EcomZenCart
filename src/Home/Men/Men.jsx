import { Footer } from "../footer";
import FetchProducts from "./fetch";
import { useState, useEffect, useContext } from "react";
import "./men.css";
import ShopContext from "../../router";

export function ForMen({ products, loading }) {
  return (
    <>
      <div className="For-Men">
        <div className="head-men">
          <h1 className="men-heading">Men</h1>
        </div>

        {/* Fetching products from api */}
        <div className="fetching">
          <FetchProducts products={products} loading={loading} />
        </div>
      </div>
    </>
  );
}
