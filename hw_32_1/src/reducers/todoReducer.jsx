const initialState = {
    todos: [],
    loading: false,
    error: null
};

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_TODOS_SUCCESS':
            return { ...state, todos: action.payload, loading: false };
        case 'LOAD_TODOS_FAILURE':
            return { ...state, error: action.error, loading: false };
        case 'ADD_TODO_SUCCESS':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'DELETE_TODO_SUCCESS':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case 'TOGGLE_TODO_SUCCESS':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case 'EDIT_TODO_SUCCESS':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
                )
            };
        case 'CLEAR_TODOS_SUCCESS':
            return { ...state, todos: [] };
        case 'LOAD_TODOS_REQUEST':
        case 'ADD_TODO_REQUEST':
        case 'DELETE_TODO_REQUEST':
        case 'TOGGLE_TODO_REQUEST':
        case 'EDIT_TODO_REQUEST':
        case 'CLEAR_TODOS_REQUEST':
            return { ...state, loading: true };
        default:
            return state;
    }
}

export default todoReducer;