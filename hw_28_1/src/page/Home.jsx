import React, {useContext} from 'react';
import TaskList from '../components/todo/TaskList';
import { TaskContext } from '../context/TaskContext';
import TaskForm from "../components/todo/TaskForm.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskDetailsModal from "../components/todo/TaskDetailsModal.jsx";
import {Container} from "react-bootstrap";

const Home = () => {
    const { tasks, deleteTask, addTask, handleTaskSelect,  handleClose, selectedTask, modalShow, toggleTask } = useContext(TaskContext);

    return (
        <Container>
            <h2>TODO List</h2>
            <TaskForm />
            <TaskList
                tasks={tasks}
                addTask={addTask}
                onTaskToggle={toggleTask}
                onTaskDelete={deleteTask}
                onTaskSelect={handleTaskSelect}
            />
            <TaskDetailsModal show={modalShow} task={selectedTask} handleClose={handleClose} />
        </Container>
    );
};

export default Home;