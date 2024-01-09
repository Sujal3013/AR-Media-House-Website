
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CustomArrows = ({ onClick, direction }) => {
    console.log(direction)
  return (
    <div
      className={`custom-arrow ${direction}`}
      onClick={onClick}
      style={{
        position: 'absolute',
        left:`${direction==='prev'?"-1%":"100%"}`,
       top:"50%",
        cursor: 'pointer',
        zIndex: 1,
      }}
    >
      <FontAwesomeIcon icon={direction === 'prev' ? faChevronLeft : faChevronRight} />
    </div>
  );
};

export default CustomArrows;
