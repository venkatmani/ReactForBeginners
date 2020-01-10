import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'MongoDB',
      isCompleted: false
    },
    {
      text: 'ExpressJS',
      isCompleted: false
    },
    {
      text: 'ReactJS',
      isCompleted: false
    },
    {
      text: 'NodeJS',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Completed</button>
        <button onClick={() => deleteTodo(index)}>Remove</button>
      </div>
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const SubmitForm = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <div>
      <form onSubmit={SubmitForm}>
        <input
          type="text"
          className="input"
          placeholder="add todo"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};
export default App;
