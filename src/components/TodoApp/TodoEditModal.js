import React from 'react';
import { connect } from 'react-redux';
import { hideEditModal, editTodo } from '../../redux/actions.js';

function TodoEditModal(props) {
    const [inputValue, setInputValue] = React.useState(props.showEditModal.value);

    function clickCloseButtonHandler() {
        props.hideEditModal();
    }

    function clickAcceptButtonHandler(e) {
        e.preventDefault();

        if (!inputValue) {
            alert('fill todo');
            return;
        }

        props.editTodo(props.showEditModal.id, inputValue);
        setInputValue('');
        props.hideEditModal();
    }

    function changeInputValue(e) {
        setInputValue(e.target.value)
    }

    return (
        <div className='todo-modal'>
            <form className='todo-modal__form' onSubmit={clickAcceptButtonHandler}>
                <input
                    className='form-control'
                    value={inputValue} 
                    onChange={changeInputValue}
                />
                <div className='buttons'>
                    <button className='btn btn-primary' type='submit'>
                        accept
                    </button>
                    <button className='btn btn-dark' onClick={clickCloseButtonHandler}>
                        close
                    </button>
                </div>
            </form>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        showEditModal: state.todos.showEditModal
    }
}

const mapDispatchToProps = {
    hideEditModal,
    editTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoEditModal);