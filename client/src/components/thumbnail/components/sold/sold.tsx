import React from 'react';

const Triangle: React.FunctionComponent = (props) => {
  return (
    <svg {...props} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <title>SOLD</title>
      <polygon points="0 0, 100 0, 0 100" />
      <text
        fill="white"
        fontSize="22"
        textAnchor="middle"
        transform="rotate(-45)"
        x="2"
        y="54"
      >
        SOLD
      </text>
    </svg>
  );
};

export default Triangle;
