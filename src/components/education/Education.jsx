import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WorkExperinceCard from "../workExperienceCard/WorkExperinceCard";
import  "./education.css"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Education() {
   const [cardCount, setCardCount] = useState(2);

   function removeFx(index) {
     const newCardCount = cardCount - 1;
     setCardCount(newCardCount);
   }

   function addFx() {
     const newCardCount = cardCount + 1;
     setCardCount(newCardCount);
   }

   const cards = Array.from({ length: cardCount }, (v, i) => (
     <WorkExperinceCard type="education" key={i} removeFx={() => removeFx(i)} />
   ));
  return (
    <div className="workExp">
      <div>
        <span className="catTitle">Education</span>
        <div className="add" onClick={addFx}>
          <FontAwesomeIcon
            icon={faCirclePlus}
            style={{ color: "#4a88dc", width: "25px", height: "25px" }}
          />
        </div>
      </div>

      <div>
       {cards}
      </div>
    </div>
  );
}
