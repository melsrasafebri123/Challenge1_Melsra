import React from "react";
import "./TodoList.css";

function Todo({todo, toggleComplete, removeTodo}) {
    function handleCheckboxClick() {
      toggleComplete(todo.id);  
    }
    function handleRemoveClick() {
        removeTodo(todo.id);
        
    }
    return(
        <div style={{display:"flex"}}>
            <table>
                <tr>
                    <td align="left">
                        <li
                            style={{
                                margin:"0px 50px 0px 0px",
                                color:"black",
                                textDecoration: todo.completed? "Line-through" : null
                            }}
                        >
                            {todo.task}
                        </li>
                    </td>
                    <td>
                        <label class="container">
                            <input type="checkbox" onClick={handleCheckboxClick}/>
                            <span class="checkmark"></span>
                        </label>

                    </td>
                    <td>
                        <button class="x" onClick={handleRemoveClick}>X</button>

                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Todo;