import React, {useState} from "react";
import {v4 as uuid} from "uuid";

function TodoForm({addTodo}) {
    const[todo,setTodo] = useState({
        id:"",
        task:"",
        completed:false
    });
    
    function handleTaskInputChange(e) {
       setTodo({...todo, task: e.target.value }); 
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuid()});
            //reset task input
            setTodo({...todo, task:""});
        }
    }

    return(
       <form class="d-flex" onSubmit={handleSubmit}>
       <input class="form-control me-2" placeholder="Todo List" aria-label="Todo List"
       name="task"
               type="text"
               value={todo.task}
               onChange={handleTaskInputChange}
       />
       <button class="btn btn-outline-success" type="submit">Submit</button>
        </form> 
    );
}

export default TodoForm;