import { useContext, useState } from "react"
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)

    const valor = useContext(TaskContext)
    console.log(valor)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description)
        createTask({
            title,
            description
        })
        setTitle('')
        setDescription('')
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className='bg-slate-800 p-5 mb-4 rounded-md' >
                <h1 className="text-2xl font-bold text-white mb-3 text-center">
                    Crea tu Tarea</h1>
                <input
                    placeholder="Nombre de tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    minLength="5"
                    maxLength="15"
                    value={title}
                    autoFocus
                    className="bg-slate-200 p-2 w-full mb-2 rounded-md"
                />
                <textarea
                    placeholder="Descripcion de tarea"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    minLength="5"
                    maxLength="50"
                    className="bg-slate-200 p-2 w-full mb-2 rounded-md"
                ></textarea>
                <button
                    className="bg-emerald-600 hover:bg-green-700 px-3 py-1 text-white rounded-md">
                    Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm