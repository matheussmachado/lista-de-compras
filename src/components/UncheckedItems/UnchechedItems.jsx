import React from "react";

import Item from "../Item/Item";


const UnchechedItems = ({ items, handleItemAlteration, handleItemDeletion, handleItemCheck }) => {
  return (
    items.filter((item) => !(item.checked)).map((item) => {
      return (        
        <div className="item" key={item.id}>
          <Item item={item} handleItemAlteration={handleItemAlteration} handleItemDeletion={handleItemDeletion} handleItemCheck={handleItemCheck}/>
        </div>
      )
    })
  )
}

export default UnchechedItems