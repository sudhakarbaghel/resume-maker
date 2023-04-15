import React, { useEffect, useState } from "react";
import "./topComponent.css";
import { FaPlus } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HourglassAnimation from "../hourglass/HourGlass";
// import { faHourglassClock } from "@fortawesome/free-solid-svg-icons";

export default function TopComponent({ downloadResume, loading }) {
  const [image, setImage] = useState(null);
  const [draggingOver, setDraggingOver] = useState(false);
    const strings = [
      "Edit fields to build your ❤️‍🔥 resume..",
      "Enter your name here...🖊️",
    ];
    const [stringIndex, setStringIndex] = useState(0);
    const currentString = strings[stringIndex];
    const [charIndex, setCharIndex] = useState(0);
    const [text, setText] = useState("");
    const [isFirstStringComplete, setIsFirstStringComplete] = useState(false);

    useEffect(() => {
      let timeout;
      if (charIndex < currentString.length) {
        timeout = setTimeout(() => {
          setText(text + currentString.charAt(charIndex));
          setCharIndex(charIndex + 1);
        }, 100);
      } else if (stringIndex < strings.length - 1) {
        timeout = setTimeout(() => {
          setStringIndex(stringIndex + 1);
          setCharIndex(0);
          setText("");
          setIsFirstStringComplete(true);
        }, 500);
      }
      return () => clearTimeout(timeout);
    }, [charIndex, currentString, stringIndex, text, strings]);
  
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    setDraggingOver(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDraggingOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDraggingOver(false);
  };

  return (
    <div className="topComponent">
      <div
        className="image-uploader"
        style={{
          width: "120px",
          height: "120px",
          border: "1px solid #ccc",
          backgroundColor: draggingOver ? "#eee" : "#fff",
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {!image && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              cursor: "pointer",
              overflow: "hidden",
              backgroundColor: "#f2f2f2",
            }}
            onClick={() => {
              document.getElementById("file-input").click();
            }}
            onDragOver={(event) => {
              event.stopPropagation();
              event.preventDefault();
              setDraggingOver(true);
            }}
            onDragLeave={(event) => {
              event.stopPropagation();
              event.preventDefault();
              setDraggingOver(false);
            }}
            onDrop={handleDrop}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <FaPlus size={20} />
              <span
                style={{
                  fontWeight: 500,
                  color: "#37bc9b",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                Drag and Upload Image
              </span>
            </div>
          </div>
        )}
        {image && (
          <img
            src={image}
            alt="Uploaded Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
        <input
          type="file"
          id="file-input"
          style={{ display: "none" }}
          onChange={(event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
              setImage(reader.result);
            };
            reader.readAsDataURL(file);
            setDraggingOver(false);
          }}
        />
      </div>
      <div className="topComponentDetails">
        <span
          style={{ outlineColor: "white", paddingLeft: 3 }}
          id="resume_new"
          contentEditable
        >
          {/* {data === "" ? title : data} */}
          {text}
        </span>
        <span style={{ outlineColor: "white", paddingLeft: 3 }} contentEditable>
          Graphic Designer & Web Developer
        </span>
        <div>
          <button className="download" style={{}} onClick={downloadResume}>
            Download CV
          </button>
          <button>Hire Me</button>
          <span>
            {loading === true ? (
              <>
                {" "}
                <HourglassAnimation />
              </>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
