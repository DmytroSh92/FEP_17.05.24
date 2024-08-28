import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("toDoList")) || []);
    const [modalShow, setModalShow] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        localStorage.setItem("toDoList", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (name) => {
        setTasks([...tasks, { id: Date.now(), name, isDone: false }]);
    };

    const toggleTask = (id) => {
        const task = tasks.find(task => task.id === id);
        if (task) {
            updateTask(id, !task.isDone);
        }
    };

    const updateTask = (id, isDone) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, isDone } : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleTaskSelect = (taskId) => {
        const task = tasks.find(task => task.id === taskId);
        setSelectedTask(task);
        setModalShow(true);
    };

    const handleClose = () => {
        setModalShow(false);
        setSelectedTask(null);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, handleTaskSelect, handleClose, selectedTask, modalShow, toggleTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContext };