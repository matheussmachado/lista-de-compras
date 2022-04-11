import { React, useContext } from "react";

import ItemBox from "../ItemBox/ItemBox";
import ItemLine from "../ItemLine/ItemLine";
import { ItemContext }  from "../../contexts/ItemContext";

import "./UncheckedItems.css"

const UncheckedItems = ()  => {
  const {items, handleItemAlteration, handleItemCheck, handleItemDeletion} = useContext(ItemContext)

  return (
    <div className="unchecked-items"> 
    {
      items.filter((item) => !(item.checked)).map((item, index, itemsArr) => {
        return (
          <div className="item-container" key={item.id}>
            <ItemBox
              rightBox={
                <input type="button" value="X"
                onClick={()=> handleItemDeletion(item.id)}
                />
              }
              leftBox={
                <input 
                  type="checkbox" defaultChecked={item.checked} 
                  onClick={() => handleItemCheck(item.id)}
                />
              }
              centerBox={
                <ItemLine>
                  <input 
                    defaultValue={item.content} 
                    onChange={(e) => handleItemAlteration(e.target.value, item.id)}
                    autoFocus={index === itemsArr.length - 1} 
                    style={item.checked ? {textDecoration:"line-through"} : {}}
                  />
                </ItemLine>
              }
            /> 
          </div>
        )        
      })
    }
    </div>
  )
}

export default UncheckedItems