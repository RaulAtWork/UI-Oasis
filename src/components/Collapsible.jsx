import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Collapsible = ({ title, children, open=true }) => {
  // Open by default but configurable based on props
  const [isOpen, setIsOpen] = useState(open);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleCollapse}>{isOpen ? <FontAwesomeIcon icon={faChevronDown} className='fa-icon'/> : <FontAwesomeIcon icon={faChevronRight} className='fa-icon'/>}{title}</div>
      {isOpen && children}
    </div>
  );
};

export default Collapsible;
