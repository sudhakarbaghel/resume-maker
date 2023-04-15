import React from "react";
import "./loadingComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Loading({ type, removeFx }) {
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
        className="workExpCardDetailsLoading"
        style={{
          borderLeftColor: `${type === "education" ? "#37bc9b" : "#4a88dc"}`,
        }}
      >
        <div>
          
            <div class="card__body body__text" id="card-details">
              <div class="skeleton skeleton-text skeleton-text__body"></div>
            </div>
         
         
            <div class="card__body body__text" id="time">
              <div class="skeleton skeleton-text skeleton-text__body"></div>
            </div>
         
        </div>
      
          <h3 className="card__header header__title" id="card-title">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </h3>
       
      </div>
    </div>
  );
}
