import React from "react";

import FilledLine from "../FilledLine/FilledLine";

const Items = ({ items }) => {
  return (
    items.map((item) => {
      return (        
        <FilledLine item={item}/>
      )
    })
  )
}

export default Items