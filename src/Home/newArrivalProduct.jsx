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
  "Classic Purse",
  "Loafer Shoes",
  "Ladies Dress Watch",
  "Women Hoodie",
  "Kids Sneaker",
  "Toddler Sunglasses",
  "Gap T-Shirt",
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
  "Made from luxurious leather, this purse exudes elegance with its clean lines and understated design",
  "he hallmark of our loafers lies in their sleek and versatile design, featuring refined stitching, a cushioned insole, and a durable outsole for all-day wearability.",
  "Crafted with precision and attention to detail, it typically features a slim and elegant design that exudes femininity. ",
  "Crafted with attention to detail, our hoodies feature a blend of quality materials that provide warmth and durability, ensuring lasting wear.",
  "Crafted from durable materials and featuring a comfortable fit, they provide support and stability with every step. ",
  "Designed to fit snugly and securely on tiny faces, each pair features durable frames and UV-blocking lenses to shield delicate eyes from harmful rays.",
  "A Gap T-shirt is a staple garment known for its quality construction, comfortable fit, and timeless style. Made from soft and durable materials, such as cotton or a cotton blend, Gap T-shirts offer a relaxed yet polished look suitable for everyday wear.",
];

export const productsPicture = [
  "../src/public/assets/rippedJeansNew.jpg",
  "../src/public/assets/nike-air-max..jpeg",
  "../src/public/assets/adidasSuperStar.webp",
  "../src/public/assets/PumaRSX.avif",
  "../src/public/assets/Balance574.webp",
  "../src/public/assets/nikeTech.jpg",
  "../src/public/assets/cargoPants.jpg",
  "../src/public/assets/TravisScottPerson.jpeg",
  "../src/public/assets/handbag2.webp",
  "../src/public/assets/Loafers.webp",
  "../src/public/assets/womenWatch.jpg",
  "../src/public/assets/3rdWomenHoodie.webp",
  "../src/public/assets/KidsShoes.jpg",
  "../src/public/assets/SecondGlasses.webp",
  "../src/public/assets/GapShirt.avif",
];

export const productPrice = [
  "$29.99",
  "$119.99",
  "$79.99",
  "$59.99",
  "$69.99",
  "$34.99",
  "$42.99",
  "2,661",
  "110.0",
  "150.00",
  "51.00",
  "54.99",
  "20.00",
  "15.00",
  "25.00",
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
