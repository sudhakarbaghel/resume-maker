import React, { useEffect, useState } from "react";
import "./aboutMe.css";

export default function AboutMe() {
  const [title, setTitle] = useState("");
  let abc = `Hello! I'm Joyce Harrison.I am passionate about UI/UX design and Web
          Design. I am a skilled Front-end Developer and master of Graphic
          Design tools such as Photoshop and sketch...🖊️`;

  useEffect(() => {
    const timeouts = [];
    const delay = 10;
    const loopTime = 29;

    // Create a timeout to start the loop after the delay
    const startTimeoutId = setTimeout(() => {
      for (let i = 0; i <= abc.length; i++) {
        const timeoutId = setTimeout(
          () => setTitle(abc.slice(0, i)),
          i * loopTime
        );
        timeouts.push(timeoutId);
      }
    }, delay);
    timeouts.push(startTimeoutId);

    // Return the cleanup function to clear all timeouts
    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  return (
    <div className="aboutMe">
      <div className="aboutMeLeftBox">
        <span style={{ padding: 3 }} className="catTitle">
          About Me
        </span>
        <p contentEditable style={{ outlineColor: "lightgray", padding: 3 }}>
          {title}
        </p>
      </div>
      <div className="aboutMeRightBox">
        <table>
          <tr>
            <td>Age</td>
            <td contentEditable>28</td>
          </tr>
          <tr>
            <td>Email</td>
            <td contentEditable>Joyce@company.com</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td contentEditable>+0719-111-0011</td>
          </tr>
          <tr>
            <td>Address</td>
            <td contentEditable>140, City Center,New York, U.S.A</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
