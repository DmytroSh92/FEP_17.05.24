import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import TodoPage from '../components/TodoPage';
import { addTodo } from '../actions/todoActions';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

jest.mock('../actions/todoActions', () => ({
    addTodo: jest.fn(),
    loadTodos: jest.fn(),
}));

describe('TodoPage', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue({ todos: [], loading: false, error: null });
    });

    it('call addTodo when add new todoList', () => {
        render(<TodoPage />);

        const input = screen.getByPlaceholderText('Enter new todo');
        const addButton = screen.getByText('Add Todo');

        fireEvent.change(input, { target: { value: 'new todo' } });
        fireEvent.click(addButton);

        expect(mockDispatch).toHaveBeenCalledWith(addTodo(expect.objectContaining({
            text: 'new todo',
        })));
    });
});
