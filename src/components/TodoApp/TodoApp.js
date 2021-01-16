import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList.js';
import TodoEditModal from './TodoEditModal.js';
import { addTodo } from '../../redux/actions.js';

class TodoApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            formValue: ''
        }

        this.changeFormValueHandler = this.changeFormValueHandler.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    changeFormValueHandler(e) {
        this.setState({formValue: e.target.value});
    }

    formSubmitHandler(e) {
        e.preventDefault();

        if (this.state.formValue) {
            const newTodo = {
                id: Date.now(),
                completed: false,
                value: this.state.formValue
            }

            this.props.addTodo(newTodo);
            this.setState({formValue: ''});

            return;
        }

        alert('fill todo');
    }

    render() {
        return(
            <section className='col-4 todo-container'>
                <h1>Todo App</h1>
                {this.props.showEditModal && <TodoEditModal />}
                <form className='todo-container__form' onSubmit={this.formSubmitHandler}>
                    <input
                        type='sumbit'
                        className='form-control'
                        placeholder='fill your todo'
                        value={this.state.formValue}
                        onChange={this.changeFormValueHandler}
                    />
                </form>
                <h2>Todos:</h2>
                <TodoList />
            </section>
        )
    }
}

const mapDispatchToProps = {
    addTodo
}

const mapStateToProps = (state) => {
    return {
        showEditModal: state.todos.showEditModal.isShow
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
