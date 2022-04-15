import { React, useContext, useEffect, useState } from "react";
import { MdOutlineChevronRight, MdOutlineCheckBox } from "react-icons/md"

import ItemBox from "../ItemBox/ItemBox";
import ItemLine from "../ItemLine/ItemLine";
import ItemDeleteButton from "../ItemDeleteButton/ItemDeleteButton";
import { ItemContext } from "../../contexts/ItemContext";

import "./CheckedItem.css"

const CheckedItems = () => {
  const {items, handleItemAlteration, handleItemCheck, handleItemDeletion} = useContext(ItemContext)
  
  const [checkedItems, setCheckedItems] = useState(items.filter((item) => item.checked))
  const [expandItems, setExpandItems] = useState(true)

  useEffect(() => {
    setCheckedItems(items.filter((item) => item.checked))
  }, [items])
  
  return (
    <div className="checked-items-container"> 
      { Boolean(checkedItems.length) && <div className="expand-checked-items" onClick={() => setExpandItems(!expandItems)}>
        <ItemBox 
          leftBox={
            <MdOutlineChevronRight style={ expandItems && {transform: "rotate(90deg)"} }/>
          }
          centerBox={
            <div>
              {checkedItems.length}
              {checkedItems.length > 1 ? " itens concluídos" : " item concluído"}
            </div>
          }
        />        
      </div> }
    {       
      expandItems && checkedItems.map((item) => {   
        return (        
          <div className="item-container" key={item.id}>
            <ItemBox
              rightBox={
                <ItemDeleteButton handleItemDeletion={() => handleItemDeletion(item.id)}/>
              }
              leftBox={
                <MdOutlineCheckBox 
                  onClick={() => handleItemCheck(item.id)}
                />
              }
              centerBox={
                <ItemLine>
                  <input 
                    defaultValue={item.content} 
                    onChange={(e) => handleItemAlteration(e.target.value, item.id)}
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

export default CheckedItems