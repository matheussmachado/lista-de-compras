import React from "react";
import Line from "../Line/Line";
import ItemContainer from "../ItemContainer/ItemContainer";

const EmptyLine = () => {
  return(
    <ItemContainer>
      <div></div>
      <div>
        <Line itemValue={""}/>
      </div>
      <div></div>
    </ItemContainer>
  )
} 

export default EmptyLine