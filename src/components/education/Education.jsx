import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WorkExperinceCard from "../workExperienceCard/WorkExperinceCard";

import "./education.css";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Loading from "../loadingComponent/LoadingComponent";

export default function Education() {
  const [loading, setLoading] = useState(false);

  const [cardCount, setCardCount] = useState(1);

  function removeFx(index) {
    const newCardCount = cardCount - 1;
    setCardCount(newCardCount);
  }
  function addFx() {
    setLoading(true);
    setTimeout(() => {
      const newCardCount = cardCount + 1;
      setLoading(false);
      setCardCount(newCardCount);
    }, 1500);
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

        {loading && <Loading type="education" />}
      </div>
    </div>
  );
}
