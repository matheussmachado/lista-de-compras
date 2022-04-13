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
          {isModalVisible && <div id="modal-options" className="modal-options" >
            <div className="uncheck-items">
              <button onClick={handleUncheckItems}>
                Desmarcar itens
              </button>
            </div>
            <div className="delete-items">
              <button onClick={handleCheckItemsDeletion}>
                Deletar itens marcados
              </button>
            </div>
          </div>}
      </div>
      <div className="more-options-button">
        <MdOutlineMoreVert onClick={() => setIsModalVisible(!isModalVisible)}/>
      </div>
    </div>
  )
}

export default CheckedItemsOptions