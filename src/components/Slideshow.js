import { Slide } from 'react-slideshow-image';
import "../slideshow.css";

const slideImages = [
    {
      url: 'https://urbanmatter.com/wp-content/uploads/2020/05/shutterstock_646327681-scaled.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.saymedia-content.com/.image/t_share/MTczODA2MjUyOTY5Njk4ODc0/getatattooapprenticeship.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.smartshanghai.com/uploads/compressed/2019/03/18/15068ba4-8661-42b0-a90b-37bac0e4cb2b.jpeg.1200.800.jpg',
      caption: 'Slide 3'
    },
  ];
  
  const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div className="each-slide" key={index}>
                <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
  }

  export default Slideshow;
