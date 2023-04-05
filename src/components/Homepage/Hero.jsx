import { useEffect } from "react";
import { useState } from "react";
import heroItems from "../../helpers/heroItems";

function Hero() {
  const [heroItem, setHeroItem] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    handleCheckIfDesktop();
  }, [])

  // setInterval(() => {
  //   return handleRotateItems("next");
  // }, 5000);

  function handleRotateItems(action) {
    if (action === "next") {
      if (heroItem === 2) {
        return setHeroItem(0);
      }

      return setHeroItem(heroItem + 1);
    }

    if (action === "prev") {
      if (heroItem === 0) {
        return setHeroItem(2);
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
    <div className="hero">

      <div className="hero_image-container">
        <img
          src={`${isDesktop ? "desktop" : "mobile"}-image-hero-${heroItem + 1}.jpg`}
          alt="chair assortment"
          className="hero_image-container_image"
        />

        <div className="hero_image-container_arrow-buttons">
          <img
            src="icon-angle-left.svg"
            alt="see previous image"
            className="hero_image-container_arrow-buttons_left"
            onClick={() => handleRotateItems("prev")}
            />
          <img
            src="icon-angle-right.svg"
            alt="see next image"
            className="hero_image-container_arrow-buttons_right"
            onClick={() => handleRotateItems("next")}
          />
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
      </div>
    </div>
  );
}

export default Hero;