import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import { Createtodo } from './components/Createtodo'
import { Todos } from './components/Todos'
function App() {
  const [todos,setTodos]= useState([]);
  fetch("http://localhost:3000/todos")
  .then( async function(res){
  
     const json = await  res.json();
     setTodos(json.todos); 
  })
  return <div>
        <Createtodo></Createtodo>
      <Todos todos={todos}></Todos>
      </div>
  
}

export default App

