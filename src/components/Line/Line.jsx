import React from "react";

import "./Line.css"

const Line = ({itemValue}) => {  
  return (
    <div className="line-container">
      <input type="text" value={itemValue}/>
    </div>
  )
}

export default Line