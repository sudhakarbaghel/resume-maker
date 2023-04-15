import React, { useEffect, useState } from "react";
import "./topComponent.css";
import { FaPlus } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HourglassAnimation from "../hourglass/HourGlass";
// import { faHourglassClock } from "@fortawesome/free-solid-svg-icons";

export default function TopComponent({ downloadResume, loading }) {
  const [image, setImage] = useState(null);
  const [draggingOver, setDraggingOver] = useState(false);
  const [data, setData] = useState("Edit fields to build resume...");
  const [title, setTitle] = useState("");
  let abc = "Enter your name here...";
  useEffect(() => {
    if (data === "") {
       for (let i = 0; i <= abc.length; i++) {
         setTimeout(() => setTitle(abc.slice(0, i)), i * 100); // set title from length 0 to i
       }
      return;
    }

    const typingTimer = setTimeout(() => {
      setData((prevData) => prevData.slice(0, -1)); // remove the last dot
    }, 170);

    return () => clearTimeout(typingTimer);
  }, [data]);

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
        <span style={{ outlineColor: "white", paddingLeft: 3 }} contentEditable>
          {data === "" ? title : data}
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
