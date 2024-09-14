import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import TodoPage from '../components/TodoPage';
import { toggleTodo } from '../actions/todoActions';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock('../actions/todoActions', () => ({
    toggleTodo: jest.fn(),
}));

describe('TodoPage', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        useDispatch.mockReturnValue(mockDispatch);
    });

    it('call toggleTodo', () => {
        useSelector.mockReturnValue({
            todos: [{ id: 1, text: 'test TODO', completed: false }],
            loading: false,
            error: null,
        });

        render(<TodoPage />);

        const todoItem = screen.getByText('test TODO');
        fireEvent.click(todoItem);

        expect(mockDispatch).toHaveBeenCalledWith(toggleTodo(1));
    });
});