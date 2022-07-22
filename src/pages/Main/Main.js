import { Link } from "react-router-dom";
import "./main.css";
const Main = ({ createArtist, pieces }) => {
  return (
    <>
      <div className="main-container">
        <div className="tagline-box">
          <h1 className="inkx">ink x</h1>
          <h1>Want to find the <em>best</em> artist for your next tattoo?</h1>
        </div>
        <div className="the-process">
          <h3>We help make it simple:</h3>
          <p>
            1. Explore our collection to find pieces you love by creators in
            your area.
          </p>
          <p>
            2. Learn about the artist to see if they're you're type of guy or gal.
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

