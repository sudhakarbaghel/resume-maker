import "./workExp.css";
import WorkExperinceCard from "../workExperienceCard/WorkExperinceCard";
import { useState } from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorkExp() {
  const [cardCount, setCardCount] = useState(1);

  function removeFx(index) {
    const newCardCount = cardCount - 1;
    setCardCount(newCardCount);
  }

  function addFx() {
    const newCardCount = cardCount + 1;
    setCardCount(newCardCount);
  }

  const cards = Array.from({ length: cardCount }, (v, i) => (
    <WorkExperinceCard key={i} removeFx={() => removeFx(i)} />
  ));

  return (
    <div className="workExp">
      <div>
        <span className="catTitle">Work Experience</span>
        <div className="add" onClick={addFx}>
          <FontAwesomeIcon
            icon={faCirclePlus}
            style={{ color: "#4a88dc", width: "25px", height: "25px" }}
          />
        </div>
      </div>
      <div>{cards}
      </div>
    </div>
  );
}
