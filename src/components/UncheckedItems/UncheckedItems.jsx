import { React, useContext } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"

import ItemBox from "../ItemBox/ItemBox";
import ItemLine from "../ItemLine/ItemLine";
import ItemDeleteButton from "../ItemDeleteButton/ItemDeleteButton";
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
                <ItemDeleteButton handleItemDeletion={() => handleItemDeletion(item.id)}/>
              }
              leftBox={
                <MdOutlineCheckBoxOutlineBlank
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