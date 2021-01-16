import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETE_CHECKBOX, EDIT_TODO, SHOW_EDIT_MODAL, HIDE_EDIT_MODAL } from './types.js'

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export function toggleCompleteTodo(id) {
    return {
        type: TOGGLE_COMPLETE_CHECKBOX,
        payload: id
    }
}

export function showEditModal(id, value) {
    return {
        type: SHOW_EDIT_MODAL,
        payload: {id, value}
    }
}

export function hideEditModal() {
    return {
        type: HIDE_EDIT_MODAL
    }
}

export function editTodo(id, value) {
    return {
        type: EDIT_TODO,
        payload: {value,id}
    }
}