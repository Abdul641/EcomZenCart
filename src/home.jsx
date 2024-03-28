import "./styles/style.css";

export function Home() {
  return (
    <div className="home">
      <div className="img-div">
        <div className="img-content">
          <h1 id="evaluate">
            Elevate your look, embrace endless possibilities
          </h1>
          {/* <p>Streamlined style with a touch of grace? Definitely</p> */}
          <button className="men-home-button">Men</button>
          <button className="men-home-button">Women</button>
        </div>
      </div>
    </div>
  );
}
