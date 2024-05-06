import "../src/Home/Cart/cartDetail.css";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <>
      <div className="error-page">
        <br></br>
        <br></br>
        <br></br>
        <p className="click-here">Looks Like you found an Error</p>
        <p className="click-here">
          Click{" "}
          <Link className="Back-to-home" to="/">
            here
          </Link>{" "}
          to continue shopping
        </p>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
