import { useSelector, useDispatch } from "react-redux";
import TodoCard from "./TodoCard";
import {deleteTodo, toggleComplete} from "../redux/todosSlice";
import { useState } from "react";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const [isEditable, setIsEditable] = useState(false)
    const dispatch = useDispatch();
    
    // handle todo done
    const handleTodoDone = (todoId) => { 
        // get todo element
        const todo = document.getElementById(todoId);
        // toggle todo element class
        todo.classList.toggle("completed");
        dispatch(toggleComplete(todoId));
    };

    // handle todo delete
    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    // handle todo edit
    const handleEditTodo = (todoId) => {
        setIsEditable(true);
        const todo = document.getElementById(todoId)
        todo.contentEditable = true;
        todo.focus();
    }


    return <div>
        {todos.map((todo) => 
            <TodoCard
                key={todo.id}
                todoText={todo.text}
                todoId={todo.id}
                todoDone={() => handleTodoDone(todo.id)}
                todoDelete={() => handleDeleteTodo (todo.Id)}
                todoEdit={() => handleEditTodo(todo.id)}
            />
      )}
  </div>;
};

export default TodoList;