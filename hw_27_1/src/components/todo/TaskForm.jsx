import React, { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { Form, InputGroup, Button } from 'react-bootstrap';

const TaskForm = () => {
    const [taskName, setTaskName] = useState('');
    const { addTask } = useTaskContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskName.trim()) {
            addTask(taskName);
            setTaskName('');
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-4">
            <InputGroup>
                <Form.Control
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Enter a new task"
                />
                <Button type="submit" variant="success">Add</Button>
            </InputGroup>
        </Form>
    );
};

export default TaskForm;