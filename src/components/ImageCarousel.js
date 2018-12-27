import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = (props) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body" style={{ padding: 0 }}>
        <div className="container" style={{ margin: 0, minWidth: '100vw' }}>
          <Carousel 
            autoPlay={true}
            infiniteLoop={true}
            interval={6000}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            stopOnHover={false}
            swipeable={true}
            transitionTime={600}>
            <div>
              <img src="assets/1.jpg" />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img src="assets/2.jpg" />
              {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
              <img src="assets/3.jpg" />
              {/* <p className="legend">Legend 3</p> */}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;