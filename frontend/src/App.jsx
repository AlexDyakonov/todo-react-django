import './App.css'
import Table from './components/Table'
import TodoForm from './components/TodoForm'
import {useEffect, useState} from "react";
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState("")
  const [isLoading, setisLoading] = useState(true)



  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:80/api/todo');
      setTodos(response.data)
      setisLoading(false)
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=' px-8 bg-indigo-100 min-h-screen '>
      <nav className='pt-8' >
        <h1 className=' text-5xl text-center pb-8'>To Do List </h1>
      </nav>

      <div className="flex justify-center">
        <TodoForm
            setTodos={setTodos}
            fetchData={fetchData}
        />
      </div>

      <div className="flex justify-center">
        <Table
            todos={todos}
            isLoading={isLoading}
            setTodos={setTodos} />
      </div>


    </div>
  )
}

export default App
