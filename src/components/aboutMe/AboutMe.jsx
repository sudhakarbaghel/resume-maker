import React from 'react'
import "./aboutMe.css"

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMeLeftBox">
        <span style={{ padding: 3 }} className="catTitle">
          About Me
        </span>
        <p contentEditable style={{ outlineColor: "lightgray", padding: 3 }}>
          Hello! I'm Joyce Harrison.I am passionate about UI/UX design and Web
          Design. I am a skilled Front-end Developer and master of Graphic
          Design tools such as Photoshop ans sketch.
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
