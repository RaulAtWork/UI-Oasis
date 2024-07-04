import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

function ExternalLink({ link, display }) {
  return (
    <a className="link-external" href={link} target="blank">
      {display}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </a>
  );
}

export default ExternalLink;
