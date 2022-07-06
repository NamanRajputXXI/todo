import React, { useState } from 'react'
import ToDoList from './components/ToDoList.component';

const App = () => {
  const [inputList , setInputList] = useState("");
  const [Items, setItems] = useState([]);



  const itemEvent = (event)=>{
    setInputList(event.target.value)


  }
  const listOfItems= ()=>{
    setItems((oldItems)=>{
      return [...oldItems, inputList]
    })
setInputList('')
  }
  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrayElement, index)=>{
        return index!== id; 

      })
    })
  }
  return (
    <>
    <div className = "main_div">
      <div className='center_div'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" 
        value={inputList}
        placeholder='Add Items'
        onChange={itemEvent}/>
        
        <button onClick={listOfItems}> + </button>
        <ol>
          
         { Items.map((itemval, index)=>
             <ToDoList
             key={index} 
             id={index} 
             text={itemval}
             onSelect= {deleteItems}
             />
          )}
        </ol>
      </div> 
     </div>
    </>
  )
}

export default App