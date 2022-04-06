import React from "react";

import ItemContainer from "../ItemContainer/ItemContainer";
import Line from "../Line/Line";

import "./FilledLine.css"

const FilledLine = ({item}) => {
  return (
    <ItemContainer>
      <div className="item-check-button-container">
        <input type="checkbox"/>
      </div>
      <div className="item-content-container">
        <Line itemValue={item.content}/>
      </div>
      <div className="item-remove-button-container">        
        <input type="button" value="X"/>
      </div>
    </ItemContainer>
  )
}

export default FilledLine