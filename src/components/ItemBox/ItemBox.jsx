import { React, useState } from "react";

import "./ItemBox.css"


const ItemBox = (props) => {

  const [isHovering, setIsHovering] = useState(false)

  const [focused, setFocused] = useState(false)

  const handleOnFocus = () => {
    setFocused(true)
    setIsHovering(true)
  }

  const handleOnBlur = () => {
    setFocused(false)
    setIsHovering(false)
  }

  const handleOnMouseEnter = () => {
    setIsHovering(true)
  }
  
  const handleOnMouseLeave = () => {    
    if (!focused) setIsHovering(false)
  }

  return (
    <div className="item-box" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <div className="left-box">
        {props.leftBox}
      </div>
      <div className="center-box" onFocus={handleOnFocus} onBlur={handleOnBlur}>
        {props.centerBox}
      </div>
      <div className="right-box" 
      style={{visibility : isHovering ? "visible" : "hidden"}}
      >
        {props.rightBox}
      </div>
    </div>
  )
}

export default ItemBox