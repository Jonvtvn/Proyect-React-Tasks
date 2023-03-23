import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext)
    return (
        <div className='break-words mx-auto max-w-sm p-6 bg-white border border-gray-200 
        rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:h-50 lg:h-50 
        lg:w-72 sm:w-96 md:w-80 xl:w-72 max-[]:w-96 '>
            <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize'>{task.title}</h1>
            <p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>{task.description}</p>

            <button
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() =>
                    deleteTask(task.id)}>Eliminar Tarea
            </button>
        </div>
    )
}

export default TaskCard


// div bg - gray - 800 text - white p - 4 pb - 16 rounded - md relative h - 100 w - 50
//h1
//p text-gray-200 text-sm text-center

//-