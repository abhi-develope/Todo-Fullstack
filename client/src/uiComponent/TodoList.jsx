import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete }) => {
    return (
        <ul className="list-none p-0 mb-4">
          {todos.map((todo, index) => (
            <TodoItem 
              key={index} 
              todo={todo} 
              onDelete={() => onDelete(index)} 
            />
          ))}
        </ul>
      );
    }
export default TodoList
