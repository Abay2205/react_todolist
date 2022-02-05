import React from 'react';

const Todo = (props) => {
    return (
        <div key={props.el.id} className='item-todo'>
            <div
                className={props.el.complete ? 'item-text strike' : 'item-text'}
                onClick={() => props.handleToggle(props.el.id)}
            >
                {props.el.task}
            </div>
            <div
                className='item-delete'
                onClick={() => props.removeTask(props.el.id)}
            >
                X
            </div>
        </div>
    );
};

export default Todo;