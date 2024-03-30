import "./index.css";
import { useState, useEffect } from "react";
import { ForMen } from "./forMen";
import { ForWomen } from "./forWomen";
import { fetchProducts } from "./fetch";
export function Home() {
  return (
    <>
      <div className="home">
        <div className="img-div">
          <div className="img-content">
            <h1 id="evaluate">Elevate your look, endless possibilities</h1>
            <button className="men-home-button">Men</button>
            <button className="men-home-button">Women</button>
          </div>
        </div>
      </div>
      <br></br>

      {/* Top Picks */}
      <TopPicks />
    </>
  );
}

function TopPicks() {
  const [activeButton, setActiveButton] = useState("men"); // State for active button

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="top-picks">
      <h1 className="top-picks-heading text-3xl">Top Picks </h1>
      <div className="buttons">
        <button
          className={`top-pick-buttons ${
            activeButton === "men" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("men")}
        >
          For Men
        </button>
        <button
          className={`top-pick-buttons ${
            activeButton === "women" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("women")}
        >
          For Women
        </button>
        <button
          className={`top-pick-buttons ${
            activeButton === "kids" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("kids")}
        >
          For Kids
        </button>
      </div>
      {/* Conditional render */}
      {activeButton === "men" && (
        <div>
          <ForMen />
        </div>
      )}
      {activeButton === "women" && (
        <div>
          <ForWomen />
        </div>
      )}
      {activeButton === "kids" && (
        <div>
          <ForKids />
        </div>
      )}
    </div>
  );
}

function ForKids() {
  return (
    <>
      <div className="for-kids">
        <h1>For Kids</h1>
      </div>
    </>
  );
}

fetchProducts();
