import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import './Collapsible.css'

const Collapsible = ({ title, children, open = true }) => {
  // Open by default but configurable based on props
  const [isOpen, setIsOpen] = useState(open);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleCollapse} className={`collapsible ${isOpen ? "open" : "closed"}`}>
        {title}
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronDown} className="fa-icon" />
        ) : (
          <FontAwesomeIcon icon={faChevronRight} className="fa-icon" />
        )}
      </div>
      {isOpen && children}
    </div>
  );
};

export default Collapsible;
