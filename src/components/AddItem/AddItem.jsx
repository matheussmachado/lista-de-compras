import React from "react";
import ItemContainer from "../ItemContainer/ItemContainer";

//import EmptyLine from "../EmptyLine/EmptyLine";
import Line from "../Line/Line"
import "./AddItem.css"

const AddItem = () => {
  return(
    //<EmptyLine />
    <ItemContainer>
      <div className="add-item-line-container">
        <Line />    
      </div>
    </ItemContainer>
  )
} 

export default AddItem 