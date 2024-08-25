import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const TaskDetailsModal = ({ show, handleClose, task }) => {
    if (!task) {
        return null;
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Task Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Name:</strong> {task.name}</p>
                <p><strong>Status:</strong> {task.isDone ? 'Completed' : 'Pending'}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskDetailsModal;