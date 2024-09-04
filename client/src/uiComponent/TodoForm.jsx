import React from 'react'

const TodoForm = ({ inputValue, onInputChange, onAddTodo }) => {
    return (
        <form >
              <div className="flex mt-4">
          <input 
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="text" 
            value={inputValue} 
            onChange={(e) => onInputChange(e.target.value)} 
            placeholder="Enter Item"
          />
          <button 
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150" 
            onClick={onAddTodo}
          >
            Submit
          </button>
        </div>
          </form>
      );
    }
export default TodoForm
