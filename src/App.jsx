import React, { useRef, useState } from 'react';

import AddItem from './components/AddItem/AddItem';
import UnchechedItems from './components/UncheckedItems/UnchechedItems';
import CheckedItems from './components/CheckedItems/CheckedItems';

import './App.css';

function App() {
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
    const newItems = [
      ...items,
      {
        content: itemContent,
        checked: false,
        id: Math.random(10)
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
      if (item.id !== itemId) return item
      item.checked = !(item.checked)
      return item
    })
    setItems(newItems)
  }

  return (
    <div className='container'>
      <div className="unchecked-items">
        <UnchechedItems items={items} handleItemAlteration={handleItemAlteration} handleItemDeletion={handleItemDeletion} handleItemCheck={handleItemCheck}/>
      </div>
      <div className='add-item'>
        <AddItem handleItemAdd={handleItemAdd}/>
      </div>
      <div className="separation"></div>
      <div className="checked-items">
        <CheckedItems items={items} handleItemAlteration={handleItemAlteration} handleItemCheck={handleItemCheck} handleItemDeletion={handleItemDeletion}/>
      </div>
    </div> 
  )
}

export default App;
