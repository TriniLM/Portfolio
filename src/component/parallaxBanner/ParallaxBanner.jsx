import React from 'react';
import './parallaxBanner.css';
export default function ParallaxBanner() {
  return (
    <div className={'parallax-container'}>
        <img
  src={`${import.meta.env.BASE_URL}parallax-banner/banner-one.webp`}
  alt="imagen parallax uno"
  className="parallax-one"
/>

<img
  src={`${import.meta.env.BASE_URL}parallax-banner/banner-two.webp`}
  alt="imagen parallax dos"
  className="parallax-two"
/>

<img
  src={`${import.meta.env.BASE_URL}parallax-banner/banner-three.webp`}
  alt="imagen parallax tres"
  className="parallax-three"
/>

    </div>
  )
}
