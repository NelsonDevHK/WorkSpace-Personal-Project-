import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function handleAddTodo() {
    if (newTodo.trim() === '') return; // Don't add empty todos
    setTodos([...todos, {text: newTodo, completed: false}]);
    setNewTodo('');
  }

  function handleToggleComplete(index) {
    setTodos([
      ...todos.slice(0, index),
      {...todos[index], completed: !todos[index].completed},
      ...todos.slice(index + 1)
    ]);
  }

  return (
    <div className='ToDoList'>
      <h1>Todo List</h1>
      <ul className='Item'>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "Todo completed" : "Todo"}>
            <span className="TodoCheckbox" onClick={() => handleToggleComplete(index)}>
              {todo.completed ? <>&#x2714;</> : <>&#x2610;</>}
            </span>
            <span className="TodoText">{todo.text}</span>
          </li>
        ))}
      </ul>

      <div className='ToDoBox'>
        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button className="add" onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoList;
