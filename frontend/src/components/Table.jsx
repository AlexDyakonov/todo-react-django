import React from 'react'
import { MdOutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

const Table = ({ todos, isLoading, setTodos }) => {

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
                            <td className='p-3 text-sm'>
                                <span className='inline-block cursor-pointer'> <MdOutlineCheckBox/> </span>
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
                                <span className=' text-xl cursor-pointer'><MdOutlineDeleteOutline/></span>
                            </td>
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