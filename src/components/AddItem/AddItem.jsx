import React, { useState } from "react";
import ItemLine from "../ItemLine/ItemLine";
import ItemBox from "../ItemBox/ItemBox";

import "./AddItem.css"


const AddItem = ({handleItemAdd}) => {
  const [inputData, setInputData] = useState("")

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleInputAddItemClick = () => {
    handleItemAdd(inputData)
    setInputData("")
  }

  return (
    <>
      <ItemBox
        centerBox={
          <ItemLine>
              <input type="text" 
              placeholder="+ Novo Item"
              onChange={handleInputChange}
              value={inputData}
              />
          </ItemLine>
        }
      />
      <button onClick={handleInputAddItemClick}>Add</button>
    </>
  )
}

export default AddItem