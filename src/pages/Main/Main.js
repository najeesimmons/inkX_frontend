import { Link } from "react-router-dom";
// import { useEffect } from "react";
import "./main.scss";
const Main = () => {


  return (
    <div className="main-container">
      <div className="main-intro-div">
        <strong>ink X</strong>
        <h1>Finally, a place for all your tattoo needs.</h1>
        <div className="hidden-image-div">
          <img
            src="https://i.imgur.com/ZDzan4u.png"
            alt="smiling woman getting a tattoo"
          />
        </div>
        <p>
          We know it can be hard to find the right tattoo artist for you. Our
          mission is to make it easy for you to connect with artists you love.
        </p>
        <Link to="/piece#">
          <button className="explore-button">Explore</button>
        </Link>
      </div>
      <div className="main-image-div">
        <img
          src="https://i.imgur.com/ZDzan4u.png"
          alt="smiling woman getting a tattoo"
        />
      </div>
    </div>
  );
};

export default Main;
// will add additonal pages based on jsx below
<>
 <div className="steps-wrapper">
        <h1>How does it work?</h1>
        <div className="steps-container">
          <div className="column"> 1.
            <section className="step-1">
              Browse our collections and you find work that speaks
              to you. Soon, members will be able to save their favorites!
            </section>
          </div>
          <div className="column"> 2.
            <section className="step-2">
              Read more about the artist and see more of their work.
            </section>
          </div>
          <div className="column"> 3.
            <section className="step-3">
              If you like what you're seeing, connect with the artist.
            </section>
          </div>
        </div>
      </div>
    </> 

