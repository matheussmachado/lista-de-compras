import React, { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Items from './components/Items/Items';

function App() {
  const [items, setItems] = useState([
    {
      id: "0",
      content: "algo"
    },
    {
      id: "1",
      content: "outro"
    }
  ])

  return (
    <div className='container'>
      <div className="items-container">
        <Items items={items}/>
      </div>
      <div className='add-item-container'>
        <AddItem />
      </div>
    </div> 
  )
}

export default App;
