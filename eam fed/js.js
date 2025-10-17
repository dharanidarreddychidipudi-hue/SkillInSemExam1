import React from "react";

const Card = ({ children }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "400px",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
