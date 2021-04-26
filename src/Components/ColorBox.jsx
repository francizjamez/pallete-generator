const ColorBox = ({ color, opacity }) => {
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color, opacity: opacity }}
    ></div>
  );
};

export default ColorBox;
