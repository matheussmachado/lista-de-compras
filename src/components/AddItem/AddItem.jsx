import React from "react";
import ItemLine from "../ItemLine/ItemLine";
import ItemBox from "../ItemBox/ItemBox";

import "./AddItem.css"


const AddItem = ({handleItemAdd}) => {  
  const handleInputChange = (e) => {
    handleItemAdd(e.target.value)
  }

  return (
    <>
      <ItemBox
        centerBox={
          <ItemLine>
              <input type="text" 
              placeholder="+ Novo Item"
              onChange={handleInputChange}
              value=""
              autoFocus
              />
          </ItemLine>
        }
      />
    </>
  )
}

export default AddItem