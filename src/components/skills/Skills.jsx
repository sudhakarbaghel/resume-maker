import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillSlider from "../skillSlider/SkillSlider";
import "./skills.css";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const sliderIds = [
  "Html",
  "CSS",
  "Javascript",
  "React",
  `Type your new skill ❤️‍🔥 `,
];

export default function Skills() {
  const [sliderCount, setSliderCount] = useState(sliderIds.length);

  function removeFx(index) {
    sliderIds.splice(index, 1);
    setSliderCount(sliderCount - 1);
  }

  function addFx() {
    const newSliderId = `Type your new skill ❤️‍🔥 `;
    sliderIds.push(newSliderId);
    setSliderCount(sliderCount + 1);
  }

  return (
    <div className="skills">
      <div>
        <span className="catTitle">Professional Skills</span>
        <div className="add skillsAdd" onClick={addFx}>
          <FontAwesomeIcon
            icon={faCirclePlus}
            style={{ color: "#4a88dc", width: "25px", height: "25px" }}
          />
        </div>
      </div>
      <div className="skillsWrap">
        {sliderIds.map((id, index) => (
          <SkillSlider
            key={id}
            index={index}
            id={id}
            removeFx={() => removeFx(index)}
          />
        ))}
      </div>
    </div>
  );
}
