import React, { useEffect, useRef, useState } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const images = ["/images/carousel1.png", "/images/carousel2.png"]; 
  const imageCount = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        let newIndex = currentIndex + scrollDirection;

        if (newIndex >= imageCount) {
          newIndex = imageCount - 1;
          setScrollDirection(-1);
        } else if (newIndex < 0) {
          newIndex = 0;
          setScrollDirection(1);
        }

        setCurrentIndex(newIndex);

        carouselRef.current.scrollTo({
          left: newIndex * carouselRef.current.clientWidth,
          behavior: 'smooth',
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, scrollDirection, imageCount]);

  return (
    <div className='bg-[#ebebeb] hidden md:block '>
      <div className='py-3 relative'>
      <div
        ref={carouselRef}
        className='flex overflow-x-scroll scrollbar-hide gap-x-4'
      >
        {images.map((src, index) => (
          <div key={index} className='h-72 w-[1280px] flex-shrink-0'>
            <img className='rounded-md h-full w-full' src={src} alt={`Carousel ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-4 absolute w-full bottom-8'>
        {images.map((_, index) => (
          <span
            key={index}
            className={`size-2 mx-1 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Carousel;
