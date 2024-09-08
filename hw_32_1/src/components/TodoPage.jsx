import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, editTodo, clearTodos, loadTodos } from '../actions/todoActions';

const TodoPage = () => {
    const dispatch = useDispatch();
    const { todos, loading, error } = useSelector(state => state.todo);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        if(todos.length === 0){
            dispatch(loadTodos());
            }
    }, [dispatch]);

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleEditTodo = (id, text) => {
        const newText = prompt('Edit your todo:', text);
        if (newText) {
            dispatch(editTodo(id, newText));
        }
    };

    return (
        <div className="todo-page">
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
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch(clearTodos())}>Clear Todos</button>
        </div>
    );
};

export default TodoPage;
