import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
    return (
        <li className="flex justify-between items-center p-2 border-b border-gray-200">
          {todo}
          <button 
            className="text-gray-500 hover:text-red-500 transition duration-150" 
            onClick={onDelete}
          >
            ✖
          </button>
        </li>
      );
    }
    

export default TodoItem
