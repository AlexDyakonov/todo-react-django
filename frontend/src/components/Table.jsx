import React from 'react'
import { MdOutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'
import axios from 'axios'

const Table = ({ todos, isLoading, setTodos }) => {
      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://127.0.0.1:80/api/todo/${id}/`)
          const newList = todos.filter(todo => todo.id !== id)
          setTodos(newList)
        } catch (error) {
          console.log(error);
        }
      }

      const handleEdit = async (id, value) => {
        try {
          const response = await axios.patch(`http://127.0.0.1:80/api/todo/${id}/`, value)
          console.log(response.data);
          const newTodos = todos.map(todo => todo.id === id ? response.data : todo)
          setTodos(newTodos)
        } catch (error) {
          console.log(error);
        }
      }

      const handleCheckbox = (id, value) => {
        console.log(value.completed);
        handleEdit(id, {
          'completed': !value
        })
      }
    

    return(
        <div className='py-8 center'>
            <table className='w-11/12 max-w-4xl'>
                <thead className='border-b-2 border-black'>
                    <tr>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Checkbox</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>To Do</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date Created</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {isLoading ? <div>Is loading</div> :
                    <>
                { todos.map( (todoItem, index) => {
                    return (
                        <tr key={todoItem.id} className="border-b border-black">
                            <td className='p-3'>
                                <span onClick={() => handleCheckbox(todoItem.id, todoItem.completed)}
                                  className='inline-block cursor-pointer'>{todoItem.completed === true ? <MdOutlineCheckBox /> :
                                    <MdOutlineCheckBoxOutlineBlank />}
                                </span>
                            </td>
                            <td className='p-3 text-sm ' title={todoItem.id}>{todoItem.body}</td>
                            <td className='p-3 text-sm text-center'>
                                <span
                                    className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${todoItem.completed ? 'bg-green-300' : 'bg-red-300'}`}>
                                  {todoItem.completed ? 'Done' : 'Incomplete'}
                                </span>
                            </td>
                            <td className='p-3 text-sm font-medium'>{new Date(todoItem.created).toLocaleString()}</td>
                            <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
                            <span><label htmlFor="my-modal"><MdEditNote
                                className=' text-xl cursor-pointer'/></label></span>
                            <span className=' text-xl cursor-pointer'><MdOutlineDeleteOutline onClick={() => handleDelete(todoItem.id)} /></span>                            </td>
                        </tr>
                    )
                })
                }
                    </>
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table