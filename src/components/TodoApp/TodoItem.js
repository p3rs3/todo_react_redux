import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggleCompleteTodo, showEditModal } from '../../redux/actions';
import '../../styles/components/TodoApp/TodoItem.scss';

function TodoItem(props) {
    const completed = props.todo.completed ? 'completed' : '';

    function clickRemoveButtonHandler() {
        props.removeTodo(props.todo.id);
    }

    function clickCheckboxHandler() {
        props.toggleCompleteTodo(props.todo.id);
    }

    function clickEditButtonHandler() {
        props.showEditModal(props.todo.id, props.todo.value);
    }

    return (
        <div className='todo-container__item'>
            <div className='field'>
                <input 
                    type='checkbox'
                    className='form-check-input'
                    onChange={clickCheckboxHandler}
                    checked={props.todo.completed}
                />
                <b>{props.index + 1}: </b>
                <p className={completed}>
                    {props.todo.value}
                </p>
            </div>

            <div className='buttons'>
                <button className='btn btn-dark' onClick={clickRemoveButtonHandler}>
                    delete
                </button>
                <button className='btn btn-secondary' onClick={clickEditButtonHandler}>
                    edit
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeTodo,
    toggleCompleteTodo,
    showEditModal
}

export default connect(null, mapDispatchToProps)(TodoItem);
