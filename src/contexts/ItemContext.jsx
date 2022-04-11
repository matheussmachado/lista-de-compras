import { React, createContext, useState } from "react";

export const ItemContext = createContext()

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      content: "algo",
      checked: false,
      id: "0"
    },
    {
      id: "1",
      checked: false,
      content: "outro"
      
    }
  ])

  const handleItemAdd = (itemContent) => {
    const newId = Math.random(10)
    const newItems = [
      ...items,
      {
        content: itemContent,
        checked: false,
        id: newId
      }
    ]
    setItems(newItems)
  }

  const handleItemAlteration = (newContent, itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) return {...item, content: newContent}      
      return item
    })
    setItems(newItems)
  }

  const handleItemDeletion = (itemId) => {
    const newItems = items.filter((item) => {
      return item.id !== itemId
    })
    setItems(newItems)
  }

  const handleItemCheck = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) return {...item, checked: !item.checked}      
      return item
    })
    setItems(newItems)
  }

  const handleUncheckItems = () => {
    const newItems = items.map((item) => {
      if (item.checked === true) return {...item, checked: false}      
      return item
    })
    setItems(newItems)
  }

  const handleCheckItemsDeletion = () => {
    const newItems = items.filter((item) => !item.checked)
    setItems(newItems)
  }

  return (
    <ItemContext.Provider value={{items, handleItemAdd, handleItemAlteration, handleItemCheck, handleItemDeletion, handleUncheckItems, handleCheckItemsDeletion}}>
      {children}
    </ItemContext.Provider>
  )
}

export default ItemProvider