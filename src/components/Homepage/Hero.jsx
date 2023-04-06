import { useEffect } from "react";
import { useState } from "react";
import heroItems from "../../helpers/heroItems";

function Hero() {
  const [heroItem, setHeroItem] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [fade, setFade] = useState(false);

  const animationDuration = 500;

  useEffect(() => {
    handleCheckIfDesktop();
  }, [])  

  function handleRotateItems(action) {
    const lastItemPosition = heroItems.length - 1;
    setFade(true);

    setTimeout(() => {
      setFade(false);
    }, animationDuration);

    if (action === "next") {
      if (heroItem === lastItemPosition) {
        return setHeroItem(0);
      }

      return setHeroItem(heroItem + 1);
    }

    if (action === "prev") {
      if (heroItem === 0) {
        return setHeroItem(lastItemPosition);
      }
    
      return setHeroItem(heroItem - 1);
    }
  }

  function handleCheckIfDesktop() {
    if (window.innerWidth < 481) {
      return setIsDesktop(false);
    }

    return setIsDesktop(true);
  }

  addEventListener("resize", handleCheckIfDesktop);

  return (
    <div
      className="hero"
      style={fade ? {
        animation: `fade ${animationDuration}ms ease-in-out forwards`
      } : null}
    >

      <div className="hero_image-container">
        <img
          src={`${isDesktop ? "desktop" : "mobile"}-image-hero-${heroItem + 1}.jpg`}
          alt="chair assortment"
          className="hero_image-container_image"
        />

        <div className="hero_image-container_arrow-buttons">
          <div
            className="hero_image-container_arrow-buttons_left"
            onClick={() => handleRotateItems("prev")}
          >
            <img
              src="icon-angle-left.svg"
              alt="see previous image"
            />
          </div>
          
          <div
            className="hero_image-container_arrow-buttons_right"
            onClick={() => handleRotateItems("next")}
          >
            <img
              src="icon-angle-right.svg"
              alt="see next image"
            />
          </div>
        </div>
      </div>

      <div className="hero_content">
        <div className="hero_content_container">
          <h1 className="hero_content_container_header">
            {heroItems[heroItem].header}
          </h1>

          <p className="hero_content_container_description">
            {heroItems[heroItem].description}
          </p>

          <button className="hero_content_container_button">
            SHOP NOW
            <img src="icon-arrow.svg" alt="right arrow" />
          </button>
        </div>

        <div className="hero_content_arrow-buttons">
          <div
            className="hero_content_arrow-buttons_left"
            onClick={() => handleRotateItems("prev")}
          >
            <img
              src="icon-angle-left.svg"
              alt="see previous image"
            />
          </div>

          <div
            className="hero_content_arrow-buttons_right"
            onClick={() => handleRotateItems("next")}
          >
            <img
              src="icon-angle-right.svg"
              alt="see next image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;