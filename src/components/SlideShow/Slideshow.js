import "./slideshow.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Slideshow = ({ pieces }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 0,
    },
  });

  return (
    <div className="slideshow-wrapper">
    <div ref={sliderRef} className="keen-slider">
      {pieces.map((piece) => {
        return (
          <div key={piece.title} className="keen-slider__slide number-slide">
            <img
              src={piece.image}
              key={piece._id}
              alt={piece.title}
              className="main-slide-image"
            />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Slideshow;
