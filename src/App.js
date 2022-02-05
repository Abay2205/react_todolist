import {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function App() {

    const [todos, setTodos] = useState([]);

    const addTask = (userInput) => {
        if (userInput) {
            const newListItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newListItem])
        }
    }
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }
    const handleToggle = (id) => {
        setTodos([...todos.map((todo) =>
            todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
    }


    return (
        <div className='App'>
            <h1>To Do List: {todos.length}</h1>
            <TodoForm addTask={addTask}/>
            {todos.map((el) => {
                    return (
                        <Todo
                            key={el.id}
                            el={el}
                            handleToggle={handleToggle}
                            removeTask={removeTask}
                        />
                    )
                }
            )}
        </div>
    );
}

export default App;
