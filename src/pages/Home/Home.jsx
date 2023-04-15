import React, { useState } from "react";
import TopComponent from "../../components/topComponent/TopComponent";
import "./home.css";
import Resume from "../resume/Resume";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Contact from "../../components/contact/Contact";

export default function Home() {
  const [loader, setLoader] = useState(false);

  function downloadResume() {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 4500);
    const html = document.getElementsByTagName("HTML")[0];
    const body = document.getElementsByTagName("BODY")[0];
    let htmlWidth = html.clientWidth;
    let bodyWidth = body.clientWidth;

    const data = document.querySelector(".resume");
    const newWidth = data.scrollWidth - data.clientWidth;

    if (newWidth > data.clientWidth) {
      htmlWidth += newWidth;
      bodyWidth += newWidth;
    }

    html.style.width = htmlWidth + "px";
    body.style.width = bodyWidth + "px";

    const addElements = document.querySelectorAll(".add");
    const removeElements = document.querySelectorAll(".remove");
    const downloadElements = document.querySelectorAll(".download");

    addElements.forEach((element) => {
      element.style.opacity = "0";
    });
    removeElements.forEach((element) => {
      element.style.opacity = "0";
    });
    // downloadElements.forEach((element) => {
    //   element.style.display = "none";
    // });

    html2canvas(data)
      .then((canvas) => {
        return canvas.toDataURL("image/png", 1.0);
      })
      .then((image) => {
          // downloadElements.forEach((element) => {
          //   element.style.display = "block";
          // });
        saveAs(image, "resume.png");

        html.style.width = null;
        body.style.width = null;

        addElements.forEach((element) => {
          element.style.opacity = "1";
        });
        removeElements.forEach((element) => {
          element.style.opacity = "1";
        });
      
      });
  }

  const saveAs = (blob, fileName) => {
    const elem = window.document.createElement("a");
    elem.href = blob;
    elem.download = fileName;
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === "function") {
      elem.click();
    } else {
      elem.target = "_blank";
      elem.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );
    }
    URL.revokeObjectURL(elem.href);
    elem.remove();
  };

  return (
    <div className="home">
      <div className="homeContainer">
        <Topbar />
        <Resume downloadResume={downloadResume} loading={loader} />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}
