import React from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { InputGroup, Button, Form as BootstrapForm } from 'react-bootstrap';

const TaskForm = () => {
    const { addTask } = useTaskContext();

    const validate = (values) => {
        const errors = {};
        if (!values.taskName) {
            errors.taskName = 'Task name is required';
        } else if (values.taskName.length < 5) {
            errors.taskName = 'Task name must be at least 5 characters long';
        }
        return errors;
    };

    return (
        <Formik
            initialValues={{ taskName: '' }}
            validate={validate}
            onSubmit={(values, { resetForm }) => {
                addTask(values.taskName);
                resetForm();
            }}
        >
            {({ isSubmitting }) => (
                <Form className="mb-4">
                    <InputGroup>
                        <Field
                            as={BootstrapForm.Control}
                            type="text"
                            name="taskName"
                            placeholder="Enter a new task"
                        />
                        <Button type="submit" variant="success" disabled={isSubmitting}>
                            Add
                        </Button>
                    </InputGroup>
                    <ErrorMessage
                        name="taskName"
                        component="div"
                        className="text-danger mt-2"
                    />
                </Form>
            )}
        </Formik>
    );
};

export default TaskForm;