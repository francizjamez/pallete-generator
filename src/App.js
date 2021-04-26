import { useState } from "react";
import ColorBox from "./Components/ColorBox";
import "./Styles/Styles.css";

function App() {
  let [color, setColor] = useState("#000000");

  let opacities = [0.17, 0.33, 0.5, 0.67, 0.83, 1];

  const generateRandomColor = () => {
    const rc1 = Math.random() * 16777215;
    const rc2 = Math.floor(rc1);
    const rc3 = rc2.toString(16);
    setColor("#" + rc3);
  };

  return (
    <div className="container">
      <h1>Color Pallete Generator</h1>
      <button
        onClick={generateRandomColor}
        style={{ border: `5px solid ${color}` }}
      >
        Generate
      </button>

      <div className="box-container">
        {opacities.map((val) => (
          <ColorBox color={color} opacity={val} />
        ))}
      </div>
    </div>
  );
}

export default App;
