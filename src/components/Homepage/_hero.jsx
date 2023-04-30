import { useEffect } from "react";
import { useState } from "react";
import heroItems from "../../helpers/heroItems";
import ArrowButtons from "../ArrowButtons";

function Hero() {
  const [heroItem, setHeroItem] = useState(0);
  const [fade, setFade] = useState(false);

  
  useEffect(() => {
    const myInterval = setInterval(() => {
      handleRotateItems("next");
    }, 20000)

    return () => clearInterval(myInterval);
  }, [heroItem])

  const animationDuration = 500;

  function handleRotateItems(action) {
    const lastItemPosition = heroItems.length - 1;
    setFade(true);

    const timeoutId = setTimeout(() => {
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

  return (
    <section
      className="hero"
      style={fade ? {
        animation: `fade ${animationDuration}ms ease-in-out forwards`
      } : null}
    >

      <div className="hero_image-container">
        <picture className="hero_image-container_image">
          <source media="(min-width: 481px)" srcSet={`desktop-image-hero-${heroItem + 1}.jpg`} />
          <img src={`mobile-image-hero-${heroItem + 1}.jpg`} />
        </picture>

        <ArrowButtons
          prev={() => handleRotateItems("prev")}
          next={() => handleRotateItems("next")}
        />
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

        <ArrowButtons
          prev={() => handleRotateItems("prev")}
          next={() => handleRotateItems("next")}
        />
      </div>
    </section>
  );
}

export default Hero;