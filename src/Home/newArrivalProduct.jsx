import "../styles/newArrival.css";
import { useRef, useEffect, useState } from "react";
import { Footer } from "./footer";
export const productNames = [
  "Mens Ripped Jeans",
  "Nike Air Max",
  "Adidas Superstar",
  "Puma RS-X",
  "New Balance 574",
  "Nike Sportswear Tech",
  "Men's Cargo Pants",
  "Jordan 1 Retro",
];
export const productDescriptions = [
  "Distressed Destroyed Slim Fit Straight",
  "Comfortable and stylish sneakers",
  "Classic sneakers with iconic design",
  "Modern and sleek sneakers",
  "Vintage-inspired sneakers",
  "Men's Full-Zip Hoodie",
  "Military Army Camo Pants Combat",
  "Step into the world of music and style with the Jordan Travis Scotts sneakers, a collaboration between Jordan Brand and the iconic rapper Travis Scott.",
];

export const productsPicture = [
  "../src/assets/rippedJeansNew.jpg",
  "../src/assets/nike-air-max..jpeg",
  "../src/assets/adidasSuperStar.webp",
  "../src/assets/PumaRSX.avif",
  "../src/assets/Balance574.webp",
  "../src/assets/nikeTech.jpg",
  "../src/assets/cargoPants.jpg",
  "../src/assets/TravisScottPerson.jpeg",
];

export const productPrice = [
  "$29.99",
  "$119.99",
  "$79.99",
  "$59.99",
  "$69.99",
  "$34.99",
  "$42.99",
  "$2,661.0",
];

export default function NewArrivalProducts() {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 550; // Adjust the amount to scroll as needed
    }
  };

  return (
    <>
      <br></br>

      <div className="for-men-NewArrival" ref={scrollContainerRef}>
        {productNames.slice(0, 7).map((productName, index) => (
          <div key={index} className="new-arrival-mainDiv">
            <div className="Arrivals-button">
              <img className="new-arrival-image" src={productsPicture[index]} />
            </div>
            <div className="Arrivals-Content">
              <h1 className="AirJordans">{productName}</h1>
              <hr></hr>
              <h2 className="AirJordans-description">
                {productDescriptions[index]}
              </h2>
              <h2 className="price">{productPrice[index]}</h2>
              <br></br>
            </div>
          </div>
        ))}
        {/* <button className="scroll-button" onClick={scrollRight}>
          <RightSVG />
        </button> */}
      </div>
    </>
  );
}

// mainTravis-div = new-arrival-mainDiv

const RightSVG = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
      </svg>
    </>
  );
};
