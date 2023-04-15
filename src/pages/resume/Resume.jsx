import React from "react";
import TopComponent from "../../components/topComponent/TopComponent";
import AboutMe from "../../components/aboutMe/AboutMe";
import "./resume.css";
import WorkExp from "../../components/workExperience/WorkExp";
import Education from "../../components/education/Education";
import Skills from "../../components/skills/Skills";
import Contact from "../../components/contact/Contact";
export default function Resume({ downloadResume,loading }) {
  return (
    <div className="resume">
      <TopComponent downloadResume={downloadResume} loading={loading} />
      <AboutMe />
      <Skills />
      <WorkExp />
      <Education />
    </div>
  );
}
