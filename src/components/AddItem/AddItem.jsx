import {React, useContext} from "react";

import ItemLine from "../ItemLine/ItemLine";
import ItemBox from "../ItemBox/ItemBox";
import { ItemContext } from "../../contexts/ItemContext";

const AddItem = () => {      
  const {handleItemAdd} = useContext(ItemContext)

  return (
    <div className="add-item-container">
      <ItemBox
        centerBox={
          <ItemLine>
              <input 
                type="text" 
                placeholder="+ Novo Item"
                value=""
                onChange={(e) => handleItemAdd(e.target.value)}
                autoFocus
              />
          </ItemLine>
        }
      />
    </div>
  )
}

export default AddItem