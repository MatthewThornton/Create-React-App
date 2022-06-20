import React from "react";

const Square = ({ 
    keyValue,
    winner,
    handleClick
}) => {
    console.log("Square keyValue: ", keyValue)
    if (!keyValue.value && !winner) {
        return (
        <button className="square"
            onClick={
                () => handleClick(keyValue)
            }
        >
        </button>
        );
    }
    // The value cannot be changed once selected. 
    return (
      <button className="square"
      >
       {keyValue.value !== null ? keyValue.value : ""}
      </button>
    );
}
export default Square;