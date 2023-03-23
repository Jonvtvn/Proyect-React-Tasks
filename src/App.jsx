import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


function App() {
  return (
    <main>
      <div className='container mx-auto p-6'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App