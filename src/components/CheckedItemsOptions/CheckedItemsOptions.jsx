import { React, useContext, useState } from "react";

import { MdOutlineMoreVert } from "react-icons/md"

import { ItemContext } from "../../contexts/ItemContext";

import "./CheckedItemsOptions.css"

const CheckedItemsOptions = () => {
  const {handleUncheckItems, handleCheckItemsDeletion} = useContext(ItemContext)
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div className="checked-item-options">
      <div className="modal-container">
          {isModalVisible && <div className="modal-options">
            <div className="uncheck-items" onClick={handleUncheckItems}>              
                Desmarcar itens              
            </div>
            <div className="delete-items" onClick={handleCheckItemsDeletion}>              
                Deletar itens marcados              
            </div>
          </div>}
      </div>
      <div className="more-options-button-container">
        <div className="more-options-button" onClick={() => setIsModalVisible(!isModalVisible)}>
          <MdOutlineMoreVert/>
        </div>
      </div>
    </div>
  )
}

export default CheckedItemsOptions