import React from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';

const TaskList = ({ tasks, onTaskToggle, onTaskDelete, onTaskSelect }) => {
    return (
        <ListGroup>
            {tasks.map(task => (
                <ListGroup.Item
                    key={task.id}
                    className="d-flex justify-content-between align-items-center"
                >
                    <div>
                        <span className={task.isDone ? 'text-decoration-line-through' : ''}>
                            {task.name}
                        </span>
                    </div>
                    <div className="d-flex align-items-center">
                        <Form.Check
                            type="checkbox"
                            checked={task.isDone}
                            onChange={() => onTaskToggle(task.id)}
                            className="me-2"
                        />
                        <Button
                            variant="danger"
                            size="sm"
                            onClick={() => onTaskDelete(task.id)}
                            className="me-2"
                        >
                            Delete
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => onTaskSelect(task.id)}
                        >
                            Select
                        </Button>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};
export default TaskList;