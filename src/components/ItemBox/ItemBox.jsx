import { React, useState } from "react";

import "./ItemBox.css"

const ItemBox = (props) => {
  const [isHovering, setIsHovering] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleOnFocus = () => {
    setIsFocused(true)
  }

  const handleOnBlur = () => {
    setIsFocused(false)
  }

  const handleOnMouseEnter = () => {
    setIsHovering(true)
  }
  
  const handleOnMouseLeave = () => {    
    setIsHovering(false)
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
      style={{opacity : !(isFocused || isHovering) && "0"}}
      >
        {props.rightBox}
      </div>
    </div>
  )
}

export default ItemBox