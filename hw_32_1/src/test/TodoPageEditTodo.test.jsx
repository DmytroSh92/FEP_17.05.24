import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import TodoPage from '../components/TodoPage';
import { editTodo } from '../actions/todoActions';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock('../actions/todoActions', () => ({
    editTodo: jest.fn(),
}));

describe('TodoPage', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        useDispatch.mockReturnValue(mockDispatch);
    });

    it('call editTodo', () => {
        window.prompt = jest.fn().mockReturnValue('edit todo');

        useSelector.mockReturnValue({
            todos: [{ id: 1, text: 'Test TODO', completed: false }],
            loading: false,
            error: null,
        });

        render(<TodoPage />);

        const editButton = screen.getByText('Edit');
        fireEvent.click(editButton);

        expect(mockDispatch).toHaveBeenCalledWith(editTodo(1, 'Edit TODO'));
    });
});
