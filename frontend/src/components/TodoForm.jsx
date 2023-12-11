import React, {useState, useEffect} from 'react'
import axios from 'axios'

const TodoForm = ({ setTodos, fetchData }) => {
    const [newTodo, setNewTodo] = useState({
        'body': ''
    })

    const handleChange = (e) => {
        setNewTodo(prev => ({
            ...prev,
            'body': e.target.value
        }))
    }

    const postTodo = async () => {
        try {
            await axios.post(`http://127.0.0.1:80/api/todo/`, newTodo)
            setNewTodo({ 'body': '' })
            setTodos(prevTodos => [...prevTodos, newTodo])
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <div className="relative  mt-10 flex">
                <div className="w-full min-w-[400px]  h-10">
                    <input type="text" placeholder="Add Todo" value={newTodo.body}
                           className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                           onChange={handleChange}
                           onKeyDown={(e) => {
                               if (e.key === 'Enter') {
                                   postTodo();
                               }
                           }}/>
                </div>
                <div className="w-full">
                    <button onClick={postTodo}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add
                        todo
                    </button>
                </div>
            </div>
        </>
    )
}

export default TodoForm