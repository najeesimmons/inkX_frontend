import { Link } from "react-router-dom";
// import { useEffect } from "react";
import "./main.scss";
const Main = () => {
  // useEffect(() => {
  //   // 👇 add class to body element
  //   document.body.classList.add("background-image");
  //   // cleanup
  //   return () => {
  //     // 👇️ remove styles when component unmounts
  //     document.body.classList.remove("background-image");
  //   };
  // }, []);

  return (
    <>
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
    </>
  );
};

export default Main;
