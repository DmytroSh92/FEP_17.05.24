import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  loadTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  clearTodos
} from './actions/todoActions';

const App = () => {
  const dispatch = useDispatch();
  const {todos, loading, error} = useSelector(state => state.todo);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({id: Date.now(), text: newTodo, completed: false}));
      setNewTodo('');
    }
  };
    const handleLoadTodos = () => {
        dispatch(loadTodos());
    };

  return (
      <div className="todo-app">
          <h1>Todo List</h1>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter new todo"
          />
          <button onClick={handleAddTodo}>Add Todo</button>
          <button onClick={handleLoadTodos}>Load Todos</button>
          <ul>
              {todos.map(todo => (
                  <li key={todo.id}>
                <span
                    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                    onClick={() => dispatch(toggleTodo(todo.id))}
                >
              {todo.text}
            </span>
                      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                      <button onClick={() => {
                          const newText = prompt('Edit your todo:', todo.text);
                          if (newText) {
                              dispatch(editTodo(todo.id, newText));
                          }
                      }}>Edit
                      </button>
                  </li>
              ))}
          </ul>
          <button onClick={() => dispatch(clearTodos())}>Clear Todos</button>
      </div>
  );
};

export default App;