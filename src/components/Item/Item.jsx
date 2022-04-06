import React from "react";

import ItemLine from "../ItemLine/ItemLine";

import "./Item.css"

const Item = ({ item }) => {
  return (    
    
    <div className="item-container">
      <div className="item-check-button-container">
        <input type="checkbox"/>
      </div>
      <div className="item-content-container">
        <ItemLine item={item.content} />
      </div>
      <div className="item-remove-button-container">        
        <input type="button" value="X"/>
      </div>
    </div>
  )
}

export default Item