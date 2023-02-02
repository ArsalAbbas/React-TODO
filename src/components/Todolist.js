import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function Todolist() {
    const [todos,setTodos] = useState([])
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo,...todos];
        setTodos (newTodos);
        // console.log(todo, ...todos);
    }
    
    const updateTodo= (todoId,newValue)=>{
        if (!newValue.text || /^\s*$/.test(newValue.text))
            return;
        setTodos(prev=>prev.map(item=>item.id===todoId? newValue:item))
    }

    
    const completeTodo= id =>{
let updatedTodos= todos.map(todo=>{
    if(todo.id===id){
        todo.isComplete=!todo.isComplete;
    }
    
    return todo;
}
 );
 setTodos(updatedTodos);
}

const removeTodo= id =>{

setTodos(todos.filter(todo=>todo.id!==id));
    
}

return (
    <>
    <div className='arsal-box'>
        <h1>What's the plan for today?</h1>
        <TodoForm onSubmit={addTodo} />
        
    </div>
    <Todo
    todos={todos}
    completeTodo={completeTodo}
    removeTodo={removeTodo}
    updateTodo={updateTodo}
    />
    </>
  )
}

export default Todolist