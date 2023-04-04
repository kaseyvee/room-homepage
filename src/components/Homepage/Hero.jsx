function Hero() {
  return (
    <div className="hero">

      <div className="hero_image-container">
        <img
          src="mobile-image-hero-1.jpg"
          alt="chair assortment"
          className="hero_image-container_image"
        />

        <div className="hero_image-container_arrow-buttons">
          <img
            src="icon-angle-left.svg"
            alt="see previous image"
            className="hero_image-container_arrow-buttons_left"
            />
          <img
            src="icon-angle-right.svg"
            alt="see next image"
            className="hero_image-container_arrow-buttons_right"
          />
        </div>
      </div>

      <div className="hero_content">
        <h1 className="hero_content_header">
          Discover innovative ways to decorate
        </h1>

        <p className="hero_content_description">
          We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
        </p>

        <button className="hero_content_button">
          SHOP NOW
          <img src="icon-arrow.svg" alt="right arrow" />
        </button>
      </div>
    </div>
  );
}

export default Hero;