import { Link } from "react-router-dom";
import "./main.scss";
const Main = ({ createArtist, pieces }) => {
  return (
    <>
      <div className="main-container">
        <div className="tagline-box">
          {/* <h1 className="inkx">ink x</h1> */}
          {/* <div className="logo-box">
          <img src=></img>
          </div> */}
          <h1 className="tagline">Want to find the <em>best</em> artist for your next tattoo?</h1>
        </div>
        <div className="the-process">
          <h3>We help make it simple:</h3>
          <p>
            1. Explore our collection to find pieces you love by creators in
            your area.
          </p>
          <p>
            2. Learn about the artist -- give em' the vibe check.
          </p>
          <p>3. If you like what you find -- connect!</p>

          <button className="explore-button">
            <Link to="/piece">Explore</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;

