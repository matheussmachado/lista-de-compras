import React from "react";

import "./ItemBox.css"


const ItemBox = (props) => {
  return (
    <div className="item-box">
      <div className="left-box">
        {props.leftBox}
      </div>
      <div className="center-box">
        {props.centerBox}
      </div>
      <div className="right-box">
        {props.rightBox}
      </div>
    </div>
  )
}

export default ItemBox