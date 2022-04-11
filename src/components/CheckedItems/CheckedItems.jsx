import { React, useContext, useEffect, useState } from "react";

import ItemBox from "../ItemBox/ItemBox";
import ItemLine from "../ItemLine/ItemLine";
import { ItemContext } from "../../contexts/ItemContext";

import "./CheckedItem.css"


const CheckedItems = () => {
  const [expandItems, setExpandItems] = useState(true)
  const {items, handleItemAlteration, handleItemCheck, handleItemDeletion, handleUncheckItems, handleCheckItemsDeletion} = useContext(ItemContext)
  
  return (
    <div className="checked-items-container"> 
    <button onClick={() => setExpandItems(!expandItems)}>
      {items.filter((item) => item.checked).length} itens concluídos
    </button> 
    <button onClick={handleUncheckItems}>
      Desmarcar itens
    </button>
    <button onClick={handleCheckItemsDeletion}>
      Deletar itens marcados
    </button>
    {       
      expandItems && items.filter((item) => item.checked).map((item) => {   
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