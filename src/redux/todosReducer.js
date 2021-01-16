import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE_CHECKBOX, EDIT_TODO, SHOW_EDIT_MODAL, HIDE_EDIT_MODAL } from './types.js';

const initialTodosState = {
    showEditModal: {
        isShow: false,
        id: null,
        value: ''
    },
    todos: [
        {
            id: 1,
            completed: false,
            value: 'first todo'
        },
        {
            id: 2,
            completed: false,
            value: 'second todo'
        },
        {
            id: 3,
            completed: false,
            value: 'third todo'
        }
    ]
}

export const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case ADD_TODO: 
            return {...state, todos: state.todos.concat([action.payload])};
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)};
        case TOGGLE_COMPLETE_CHECKBOX:
            return {...state, todos: state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo = {
                        id: todo.id,
                        completed: !todo.completed,
                        value: todo.value
                    }
                }

                return todo;
            })};
        case SHOW_EDIT_MODAL:
            return {...state, showEditModal: {isShow: true, id: action.payload.id, value: action.payload.value}};
        case HIDE_EDIT_MODAL:
            return {...state, showEditModal: false};
        case EDIT_TODO:
            return {
                ...state, todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        todo = {
                            id: todo.id,
                            completed: todo.completed,
                            value: action.payload.value
                        }
                    }

                    return todo;
                })
            }
        default: return state;
    }
}