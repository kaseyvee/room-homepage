function About() {
  return (
    <div className="about">
      <img
        className="about_image_first"
        src="image-about-dark.jpg"
        alt="dark chairs in a dark room with round wooden table"
      />

      <div className="about_content">
        <h2 className="about_content_header">
          ABOUT OUR FURNITURE
        </h2>
        <p className="about_content_description">
          Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>

      <img
        className="about_image_second"
        src="image-about-light.jpg"
        alt="white chair in a all white room"
      />
    </div>
  );
}

export default About;