import React from "react";

import "./ItemLine.css"

const ItemLine = ({itemValue}) => {  
  return (
    <div className="item-line-container">
      <input type="text" value={itemValue}/>
    </div>
  )
}

export default ItemLine