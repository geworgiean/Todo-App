import React, { useState } from 'react'
import './TOdoForm.css'

export default function TOdoForm({onAdd}) {
  const [text, setText] = useState (""); 
  return (
    <form className='todoAppForm' onSubmit={(evt) => {
    evt.preventDefault()
    onAdd(text)  
    setText("");  
    }}>
      <input className='todoInput' type="text" value={text} onChange={(evt) => setText(evt.target.value)} />
      <button className='todoAppAddButton'>Add</button>
    </form>
  )
}
