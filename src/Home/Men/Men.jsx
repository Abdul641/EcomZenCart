import { Footer } from "../footer";
import FetchProducts from "./fetch";
import "./men.css";
export function ForMen() {
  return (
    <>
      <div className="For-Men">
        <div className="head-men">
          <h1 className="men-heading">Men</h1>
        </div>

        {/* Fetching products from api */}
        <div className="fetching">
          <FetchProducts />
        </div>
      </div>
    </>
  );
}
