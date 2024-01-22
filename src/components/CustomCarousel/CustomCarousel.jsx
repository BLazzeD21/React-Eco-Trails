import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import autoplay from 'embla-carousel-autoplay';

const CustomCarousel = ({ images }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => (
          <div className="embla__slide" key={index}>
            <img src={image} alt={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
