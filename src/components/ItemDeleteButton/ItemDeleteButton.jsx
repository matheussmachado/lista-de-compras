import React from "react";
import { MdClose } from "react-icons/md";

import "./ItemDeleteButton.css"

const ItemDeleteButton = ({handleItemDeletion}) => {
  return (
    <div className="deletion-button" onClick={() => handleItemDeletion()}>
      <MdClose/>
    </div>
  )
}

export default ItemDeleteButton