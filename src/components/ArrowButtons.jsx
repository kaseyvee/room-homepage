function ArrowButtons(props) {
  return (
    <div className="arrow-buttons">
      <div
        className="arrow-buttons_left"
        onClick={props.prev}
      >
        <img
          src="icon-angle-left.svg"
          alt="see previous image"
        />
      </div>

      <div
        className="arrow-buttons_right"
        onClick={props.next}
      >
        <img
          src="icon-angle-right.svg"
          alt="see next image"
        />
      </div>
    </div>
  );
}

export default ArrowButtons;