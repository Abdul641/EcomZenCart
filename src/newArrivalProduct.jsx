import logo from "../src/assets/nike-air-max..jpeg";
import "./styles/newArrival.css";
const productNames = [
  "Nike Air Max",
  "Adidas Superstar",
  "Puma RS-X",
  "New Balance 574",
];
const productDescriptions = [
  "Comfortable and stylish sneakers",
  "Classic sneakers with iconic design",
  "Modern and sleek sneakers",
  "Vintage-inspired sneakers",
];

const productsPicture = [
  "../src/assets/nike-air-max..jpeg",
  //   "/images/adidas-superstar.jpg",
  //   "/images/puma-rs-x.jpg",
  //   "/images/new-balance-574.jpg",
];

export default function NewArrivalProducts() {
  return (
    <>
      <br></br>
      <div className="for-men-NewArrival">
        {productNames.map((productName, index) => (
          <div key={index} className="new-arrival-mainDiv">
            <div className="">
              <img
                // className="Arrivals-button"
                src={productsPicture[index]}
                // src={logo}
              />
              <button className="shop-now">Shop Now</button>
            </div>
            <div className="Arrivals-Content">
              <h1 className="AirJordans">{productName}</h1>
              <hr></hr>
              <h2 className="AirJordans-description">
                {productDescriptions[index]}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// mainTravis-div = new-arrival-mainDiv
