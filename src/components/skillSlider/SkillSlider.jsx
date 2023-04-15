import "./skillSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export default function SkillSlider({ id, index, removeFx }) {
  console.log(index);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [value, setValue] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const handleClick = (e) => {
    const containerPosition = e.target.getBoundingClientRect().left;
    console.log(containerPosition);
    const clickedWidth = e.clientX - containerPosition;
    console.log(e.clientX);
    const containerWidth = e.target.offsetWidth;
    if (clickedWidth > containerWidth) {
      setSliderPosition(containerWidth);
    } else if (clickedWidth < 0) {
      setSliderPosition(0);
    } else {
      setSliderPosition(e.nativeEvent.offsetX);
    }
  };
  useEffect(() => {
    const timeouts = [];
    for (let i = 0; i <= 300; i++) {
      const timeoutId = setTimeout(() => {
        setSliderPosition(i);
      }, 10 * i);
      timeouts.push(timeoutId);
    }
    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  const getGradient = () => {
    const baseColor = "#e9ecef";
    let selectedColor = "";
    if (index % 2 === 0) {
      selectedColor = "#4a8adc";
    } else {
      selectedColor = "#37bc9b";
    }
    const positionPercent = (sliderPosition / 300) * 100; // calculate position as a percentage
    return `linear-gradient(to right, ${selectedColor} ${positionPercent}%, ${baseColor} ${positionPercent}%)`;
  };
  const classname = index % 2 === 0 ? "slider" : "slider2";

  return (
    <div className="skillSlider">
      <div className="remove skillSliderRemove" onClick={removeFx}>
        <FontAwesomeIcon icon={faCircleMinus} style={{ color: "#975959" }} />
      </div>
      <span contentEditable>{id}</span>
      <div
      
        className="sliderContainer"
        onClick={handleClick}
        onDrag={handleClick}
        onDragOver={handleClick}
        style={{ background: getGradient() }}
      >
        <div
          className="nslider"
          style={{
            left: `${sliderPosition - 4}px`,
            backgroundColor: index % 2 === 0 ? "#4a8adc" : "#37bc9b",
          }}
        />
      </div>
      {/* <div class="sliderCdcontainer">
       
        <input
          className={`${classname}`}
          value={value}
          type="range"
          style={{}}
          onChange={(event) => setValue(event.target.value)}
        />
      </div> */}
    </div>
  );
}
