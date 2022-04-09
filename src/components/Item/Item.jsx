import React from "react";

import ItemBox from "../ItemBox/ItemBox";
import ItemLine from "../ItemLine/ItemLine";

import "./Item.css"


const Item = ({ item, handleItemAlteration, handleItemDeletion, handleItemCheck }) => {
  
  const handleInputChange = (e) => {
    handleItemAlteration(e.target.value, item.id)
  }  
  
  return (
    <div className="item-container">      
      <ItemBox 
        rightBox={<input type="button" value="X" onClick={()=> handleItemDeletion(item.id)}/>}
        leftBox={
          <input type="checkbox" checked={item.checked} onClick={() => handleItemCheck(item.id)}
          />
        }
        centerBox={
          <ItemLine>
             <input 
               defaultValue={item.content} 
               onChange={handleInputChange} 
               style={item.checked ? {textDecoration:"line-through"} : {}}/>
          </ItemLine>
        }
      />
    </div>   
  )
}

export default Item