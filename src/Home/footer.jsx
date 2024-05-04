export function Footer() {
  return (
    <>
      <div className="footer-container">
        {/* left-side */}
        <div className="footer-contact">
          <h2 className="contact-heading">CONTACT</h2>
          <ul className="contact-info">
            <li>
              <strong>Street: </strong>7418 Alvah Ave
            </li>
            <li>
              <strong>City: </strong>Baltimore
            </li>
            <li>
              <strong>State: </strong>Maryland
            </li>
            <li>
              <strong>Zip Code: </strong>21222
            </li>
            <li>
              <strong>Phone Number: </strong>667-899-2467
            </li>
          </ul>
        </div>
        {/* Menu */}
        <div className="footer-menu">
          <h2 className="menu-heading">MENU</h2>
          <ul className="menu-info">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/men">Men</a>
            </li>
            <li>
              <a href="/women">Women</a>
            </li>
            <li>
              <a href="/kids">Kids</a>
            </li>
          </ul>
        </div>

        {/* News Letter */}
        <div className="New-letter">
          <h2 className="new-letter-heading">NEWSLETTER</h2>
          <form className="footer-form">
            <input
              name="newLetter"
              type="text"
              id="newLetter"
              placeholder="Your Email address"
            />
            <button className="sign-up" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
