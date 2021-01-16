import React from 'react';
import TodoItem from './TodoItem.js';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => {
    if (!todos.length) {
        return (
            <p>
                no todos...
            </p>
        )
    }

    return (
        <div className='todo-container__list'>
            {todos.map((todo, index) => {
                return <TodoItem todo={todo} key={index} index={index}/>
            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos
    }
}

export default connect(mapStateToProps, null)(TodoList);
