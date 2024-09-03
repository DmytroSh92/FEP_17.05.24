import React from 'react';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';
import TodoList from "./components/TodoList";

const App = () => {
  return (
      <div>
        <h1>TODO list</h1>
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
  );
};

export default App;