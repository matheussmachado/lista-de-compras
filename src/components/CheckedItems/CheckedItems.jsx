import { React, useContext, useEffect, useState } from "react";

import { MdOutlineChevronRight } from "react-icons/md"

import ItemBox from "../ItemBox/ItemBox";
import ItemLine from "../ItemLine/ItemLine";
import { ItemContext } from "../../contexts/ItemContext";

import "./CheckedItem.css"

const CheckedItems = () => {
  const {items, handleItemAlteration, handleItemCheck, handleItemDeletion} = useContext(ItemContext)
  
  const [checkedItems, setCheckedItems] = useState(items.filter((item) => item.checked))
  const [expandItems, setExpandItems] = useState(false)

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
              {checkedItems.length} itens concluídos
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
                    onChange={handleItemAlteration}
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