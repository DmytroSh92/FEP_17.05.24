import { call, put, takeEvery } from 'redux-saga/effects';
import {
    ADD_TODO,
    LOAD_TODOS,
    DELETE_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
    CLEAR_TODOS
} from '../actions/todoActions';

const fakeApi = {
    fetchTodos: () => new Promise(resolve => setTimeout(() => resolve([
        {id: 1, text: 'Sample Todo', completed: false},
        {id: 2, text: 'Sample Todo 2', completed: false},
        {id: 3, text: 'Sample Todo 3', completed: false},
        {id: 4, text: 'Sample Todo 4', completed: false}
    ]), 1000)),
    addTodo: (todo) => new Promise(resolve => setTimeout(() => resolve(todo), 500)),
    deleteTodo: (id) => new Promise(resolve => setTimeout(() => resolve(id), 500)),
    toggleTodo: (id) => new Promise(resolve => setTimeout(() => resolve(id), 500)),
    editTodo: ({ id, newText }) => new Promise(resolve => setTimeout(() => resolve({ id, newText }), 500)),
    clearTodos: () => new Promise(resolve => setTimeout(() => resolve(), 500)),
};

function* loadTodosSaga() {
    try {
        const todos = yield call(fakeApi.fetchTodos);
        yield put({ type: 'LOAD_TODOS_SUCCESS', payload: todos });
    } catch (error) {
        yield put({ type: 'LOAD_TODOS_FAILURE', error });
    }
}

function* addTodoSaga(action) {
    try {
        const newTodo = yield call(fakeApi.addTodo, action.payload);
        yield put({ type: 'ADD_TODO_SUCCESS', payload: newTodo });
    } catch (error) {
        yield put({ type: 'ADD_TODO_FAILURE', error });
    }
}

function* deleteTodoSaga(action) {
    try {
        yield call(fakeApi.deleteTodo, action.payload);
        yield put({ type: 'DELETE_TODO_SUCCESS', payload: action.payload });
    } catch (error) {
        yield put({ type: 'DELETE_TODO_FAILURE', error });
    }
}

function* toggleTodoSaga(action) {
    try {
        yield call(fakeApi.toggleTodo, action.payload);
        yield put({ type: 'TOGGLE_TODO_SUCCESS', payload: action.payload });
    } catch (error) {
        yield put({ type: 'TOGGLE_TODO_FAILURE', error });
    }
}

function* editTodoSaga(action) {
    try {
        const updatedTodo = yield call(fakeApi.editTodo, action.payload);
        yield put({ type: 'EDIT_TODO_SUCCESS', payload: updatedTodo });
    } catch (error) {
        yield put({ type: 'EDIT_TODO_FAILURE', error });
    }
}

function* clearTodosSaga() {
    try {
        yield call(fakeApi.clearTodos);
        yield put({ type: 'CLEAR_TODOS_SUCCESS' });
    } catch (error) {
        yield put({ type: 'CLEAR_TODOS_FAILURE', error });
    }
}

export default function* todoSagas() {
    yield takeEvery(LOAD_TODOS, loadTodosSaga);
    yield takeEvery(ADD_TODO, addTodoSaga);
    yield takeEvery(DELETE_TODO, deleteTodoSaga);
    yield takeEvery(TOGGLE_TODO, toggleTodoSaga);
    yield takeEvery(EDIT_TODO, editTodoSaga);
    yield takeEvery(CLEAR_TODOS, clearTodosSaga);
}