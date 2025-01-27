import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExternalLink from "./ExternalLink";
import {
  faArrowLeft,
  faArrowRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { topicsOnUIUX } from "../pages/UIUX";
import { topicsOnComponents } from "../pages/Components";


function Footer() {
  const location = useLocation();
  const [previousTopic, setPreviousTopic] = useState();
  const [nextTopic, setNextTopic] = useState();

  let navigate = useNavigate()

  useEffect(() => {
    // update previous and next topic
    let [prev, next] = getPreviousAndNextTopic(location.pathname);

    setPreviousTopic(prev);
    setNextTopic(next);
  }, [location]);

  return (
    <footer>
      <div className="topic-selection">
        <div className="topic-previous">
          <button
            className="button-outline "
            style={previousTopic ? {} : { visibility: "hidden" }}
            onClick={()=>{navigate(previousTopic.link)}}
            >
            <FontAwesomeIcon icon={faArrowLeft} />
            {previousTopic?.name}
          </button>
        </div>
        <div className="topic-next">
          {" "}
          <button
            className="button-outline"
            style={nextTopic ? {} : { visibility: "hidden" }}
            onClick={()=>{navigate(nextTopic.link)}}
          >
            {nextTopic?.name}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      <p className="secondary-text-s">
        Support the project at{" "}
        <ExternalLink
          link="https://github.com/RaulAtWork/UI-Oasis"
          display="Github"
        />
      </p>
      <p className="secondary-text-s">
        Made with <FontAwesomeIcon icon={faHeart} /> by Raul Escabia
      </p>
    </footer>
  );
}

export default Footer;

function getPreviousAndNextTopic(currentLocation) {
  // identify if it is component or advice

  let prev = null;
  let next = null;

  if (currentLocation.includes("component")) {
    Object.values(topicsOnComponents).forEach((s) => {
      for (let i = 0; i < s.topics.length; i++) {
        if (s.topics[i].link === currentLocation) {
          // we have identified the current location
          if (i > 0) {
            prev = {
              name: s.topics[i - 1].name,
              link: s.topics[i - 1].link,
            }; //set the previous item
          }
          if (i + 1 < s.topics.length) {
            next = {
              name: s.topics[i + 1].name,
              link: s.topics[i + 1].link,
            }; //set the next item
          }
        }
      }
    });
  }
  if (currentLocation.includes("uiux")) {
    Object.values(topicsOnUIUX).forEach((s) => {
      for (let i = 0; i < s.topics.length; i++) {
        if (s.topics[i].link === currentLocation) {
          // we have identified the current location
          if (i > 0) {
            prev = {
              name: s.topics[i - 1].name,
              link: s.topics[i - 1].link,
            }; //set the previous item
          }
          if (i + 1 < s.topics.length) {
            next = {
              name: s.topics[i + 1].name,
              link: s.topics[i + 1].link,
            }; //set the next item
          }
        }
      }
    });
  }

  return [prev, next];
}
