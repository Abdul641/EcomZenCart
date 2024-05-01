import "../index.css";
import { Link } from "react-router-dom";
export function ForKids() {
  return (
    <>
      <br></br>
      <div className="for-men">
        {/* Travis Scott */}
        <div className="mainTravis-div">
          <div className="KidsSneaker-div">
            <Link to="/kids">
              {" "}
              <button className="shop-now">Shop Now</button>
            </Link>
          </div>
          <div className="TravisScott-Content">
            <h1 className="AirJordans">Troadlop Kids Sneaker</h1>
            <hr></hr>
            <h2 className="AirJordans-description">Tennis Boys Girls Shoes</h2>
          </div>
        </div>

        {/* Ripped Jeans */}
        <div className="mainRipped-div">
          <div className="Glasses-div">
            <Link to="/kids">
              <button className="shop-now">Shop Now</button>
            </Link>
          </div>
          <div className="TravisScott-Content">
            <h1 className="AirJordans"> Toddler Sunglasses</h1>
            <hr></hr>
            <h2 className="AirJordans-description">Girls Boys 2-4 years</h2>
          </div>
        </div>

        {/* Puffer Jacket */}
        <div className="mainJacket-div">
          <div className="GapShirt">
            <Link to="/kids">
              {" "}
              <button className="shop-now">Shop Now</button>
            </Link>
          </div>
          <div className="TravisScott-Content">
            <h1 className="AirJordans">Gap T-Shirt</h1>
            <hr></hr>
            <h2 className="AirJordans-description">
              Short Sleeve Logo T-Shirt
            </h2>
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
