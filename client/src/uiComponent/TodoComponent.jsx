import React, { useState } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoComponent = () => {
    const [todos, setTodos] = useState(['task 1', 'task 2', 'task 3']);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 shadow-lg rounded-lg bg-white">
      <h3 className="text-center text-lg font-semibold mb-4">You have {todos.length} Todos</h3>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
      <TodoForm 
        inputValue={inputValue} 
        onInputChange={setInputValue} 
        onAddTodo={handleAddTodo} 
      />
    </div>
  );
}

export default TodoComponent
