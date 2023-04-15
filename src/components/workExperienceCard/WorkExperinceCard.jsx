import React from "react";
import "./workExperienceCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function WorkExperinceCard({ type,removeFx }) {
 
  return (
    <div className="workExpCard">
      <div className="remove  WorkExpRemove" onClick={removeFx}>
        <FontAwesomeIcon icon={faCircleMinus} style={{ color: "#975959" }} />
      </div>
      <div
        className="workExpCardCircle"
        style={{
          borderColor: `${type === "education" ? "#37bc9b" : "#4a88dc"}`,
        }}
      ></div>
      <div
        className="workExpCardLine"
        style={{
          borderColor: `${type === "education" ? "#37bc9b" : "#4a88dc"}`,
        }}
      ></div>
      <div
        className="workExpCardDetails"
        style={{
          borderLeftColor: `${type === "education" ? "#37bc9b" : "#4a88dc"}`,
        }}
      >
        <div>
          <div>
            <span
              style={{ padding: "0px 3px", outlineColor: "#434a54" }}
              contentEditable
            >
              {type === "education"
                ? "Masters in Information Technology"
                : "Frontend Developer"}
            </span>
            <span>{type === "education" ? "from" : "at"}</span>
            <span
              style={{ padding: "0px 3px", outlineColor: "#434a54" }}
              contentEditable
            >
              {type === "education"
                ? "International University"
                : "Creative Agency"}
            </span>
          </div>
          <p
            style={{ padding: "0px 3px", outlineColor: "#434a54" }}
            contentEditable
          >
            May, 2015 - Present
          </p>
        </div>
        <p
          style={{ padding: "0px 3px", outlineColor: "#434a54" }}
          contentEditable
        >
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
        </p>
      </div>
    </div>
  );
}
