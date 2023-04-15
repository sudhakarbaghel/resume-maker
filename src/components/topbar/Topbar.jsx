import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./topbar.css";
export default function Topbar() {
  return (
    <div className="topbar">
      <a href="https://www.linkedin.com/in/sudhakar-singh-99b8441b2/">
        <span>Sudhakar Singh</span>
      </a>
      <div>
        <a href="https://twitter.com/SUDHAKARBAGHEL2" target="_blank">
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#7a7b7d" }} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#7a7b7d" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/sudhakar-singh-99b8441b2/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#7a7b7d" }} />
        </a>
        <a href="https://github.com/sudhakarbaghel" target="_blank">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#7a7b7d" }} />
        </a>
      </div>
    </div>
  );
}
