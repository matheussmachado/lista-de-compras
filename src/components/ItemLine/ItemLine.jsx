import React from "react";

import "./ItemLine.css"

const ItemLine = (props) => {  
  return (
    <div className="line-container">
      {props.children}
    </div>
  )
}

export default ItemLine