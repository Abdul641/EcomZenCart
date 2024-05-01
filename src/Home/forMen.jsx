import "../index.css";
import NewArrivalProducts from "./newArrivalProduct";
import { Footer } from "./footer";
import { Link } from "react-router-dom";
export function ForMen() {
  return (
    <>
      <br></br>
      <div className="for-men">
        {/* Travis Scott */}
        <div className="mainTravis-div">
          <div className="TravisScott-div">
            <Link
              to="/men" // Link to the 'coded/:name' route with the product name
            >
              <button className="shop-now">Shop Now</button>
            </Link>
          </div>
          <div className="TravisScott-Content">
            <h1 className="AirJordans">Jordan 1 Retro High OG SP</h1>
            <hr></hr>
            <h2 className="AirJordans-description">Travis Scott Mocha</h2>
          </div>
        </div>

        {/* Ripped Jeans */}
        <div className="mainRipped-div">
          <div className="RippedJeans-div">
            <Link to="/men">
              {" "}
              <button className="shop-now">Shop Now</button>
            </Link>
          </div>
          <div className="TravisScott-Content">
            <h1 className="AirJordans">Men Stacked Ripped Jeans</h1>
            <hr></hr>
            <h2 className="AirJordans-description">Cool Slim Fit</h2>
          </div>
        </div>

        {/* Puffer Jacket */}
        <div className="mainJacket-div">
          <div className="PufferJacket-div">
            <Link to="/men">
              {" "}
              <button className="shop-now">Shop Now</button>
            </Link>
          </div>
          <div className="TravisScott-Content">
            <h1 className="AirJordans">Men Hooded Puffer Jacket</h1>
            <hr></hr>
            <h2 className="AirJordans-description">Coat & Jackets</h2>
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

// New Arrivals Alert: Don't Miss Out on the Latest Trends
export default function ImageComponent() {
  return (
    <>
      <div className="image"></div>
      <NewArrival />
    </>
  );
}

function NewArrival() {
  return (
    <>
      <div className="new-arrival">
        <br></br>
        <h1 className="new-arrival-title">New Arrivals</h1>
        <h2 className="new-arrival-description">
          {"Don't Miss Out on the Latest Trends"}
        </h2>
        <div className="new-arrival-buttons">
          <Link to="/men">
            <button className="new-arrival-button">Shop Men </button>
          </Link>

          <Link to="/women">
            <button className="new-arrival-button">Shop Women </button>
          </Link>
        </div>
        <br></br>
        <NewArrivalProducts />
        <br></br>
        {/* <Footer /> */}
      </div>
    </>
  );
}
