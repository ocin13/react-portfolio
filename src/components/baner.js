import React from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import { useState } from 'react';

  const items = [
    {
      src: 'https://cdn.pixabay.com/photo/2016/03/09/09/30/woman-1245817_1280.jpg',
      altText: 'image01',
      caption: 'World Class Fashion'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2016/11/29/11/32/beautiful-1869208_1280.jpg',
      altText: 'image02',
      caption: 'Luxury clothing and watchs'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2016/11/29/07/16/balancing-1868051_1280.jpg',
      altText: 'image03',
      caption: 'New Look Every Day'
    }
  ];
  
  const SiteBanner = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="100%" height="500px" />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  
  export default SiteBanner;