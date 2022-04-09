import React from "react";

import Item from "../Item/Item";

import "./CheckedItem.css"


const CheckedItems = ({ items, handleItemAlteration, handleItemDeletion, handleItemCheck }) => {
  return (
    items.filter((item) => item.checked).map((item) => {
      return (        
        <div className="checked-items-container" key={item.id}>
          <Item item={item} handleItemAlteration={handleItemAlteration} handleItemDeletion={handleItemDeletion} handleItemCheck={handleItemCheck}/>
        </div>
      )
    })
  )
}

export default CheckedItems