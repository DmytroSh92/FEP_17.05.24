import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import TodoPage from '../components/TodoPage';
import { loadTodos } from '../actions/todoActions';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

jest.mock('../actions/todoActions', () => ({
    loadTodos: jest.fn(),
}));

describe('TodoPage', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockReturnValue({ todos: [], loading: false, error: null });
    });

    it('call loadTodos if list empty', () => {
        render(<TodoPage />);
        expect(mockDispatch).toHaveBeenCalledWith(loadTodos());
    });
});