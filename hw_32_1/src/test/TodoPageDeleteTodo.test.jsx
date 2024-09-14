import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import TodoPage from '../components/TodoPage';
import { deleteTodo } from '../actions/todoActions';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock('../actions/todoActions', () => ({
    deleteTodo: jest.fn(),
}));

describe('TodoPage', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        useDispatch.mockReturnValue(mockDispatch);
    });

    it('call deleteTodo', () => {
        useSelector.mockReturnValue({
            todos: [{ id: 1, text: 'test TODO', completed: false }],
            loading: false,
            error: null,
        });

        render(<TodoPage />);

        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);

        expect(mockDispatch).toHaveBeenCalledWith(deleteTodo(1));
    });
});
