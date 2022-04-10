import { React } from "react";

import Item from "../Item/Item";


const UnchechedItems = ({ items, handleItemAlteration, handleItemDeletion, handleItemCheck }, ref) => {
  return (
    items.filter((item) => !(item.checked)).map((item, index, itemsArr) => { 
        if (index !== itemsArr.length - 1) {
          return (
            <div className="item" key={item.id}>
              <Item item={item} handleItemAlteration={handleItemAlteration} handleItemDeletion={handleItemDeletion} handleItemCheck={handleItemCheck}/>
            </div>    
          )
        }
        return (
          <div className="item" key={item.id}>
              <Item item={item} handleItemAlteration={handleItemAlteration} handleItemDeletion={handleItemDeletion} handleItemCheck={handleItemCheck} autofocus={true}/>
            </div>
        )        
    })      
  )
}

export default UnchechedItems