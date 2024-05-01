import "../index.css";
import { Link } from "react-router-dom";
export function ForWomen() {
  return (
    <>
      <br></br>
      <div className="for-men">
        {/* Travis Scott */}
        <div className="mainTravis-div">
          <div className="HandBag-div">
            <Link to="/women">
              <button className="shop-now">Shop Now</button>
            </Link>
          </div>
          <div className="TravisScott-Content">
            <h1 className="AirJordans">Classic Purse Clutch Shoulder</h1>
            <hr></hr>
            <h2 className="AirJordans-description">HandBag with Zipper</h2>
          </div>
        </div>

        {/* Ripped Jeans */}
        <div className="mainRipped-div">
          <div className="Loafers-div">
            <Link to="/women">
              <button className="shop-now">Shop Now</button>
            </Link>
          </div>
          <div className="TravisScott-Content">
            <h1 className="AirJordans">Loafer Women shoes</h1>
            <hr></hr>
            <h2 className="AirJordans-description">Shoes</h2>
          </div>
        </div>

        {/* Puffer Jacket */}
        <div className="mainJacket-div">
          <div className="WomenWatch-div">
            <Link to="/women">
              <button className="shop-now">Shop Now</button>
            </Link>
          </div>
          <div className="TravisScott-Content">
            <h1 className="AirJordans">Numerals Ladies Dress Watch</h1>
            <hr></hr>
            <h2 className="AirJordans-description">OLEVS Women's Casual</h2>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
