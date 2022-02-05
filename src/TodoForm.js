import React, {useState} from 'react';

const TodoForm = (props) => {
    const [userInput, setUserInput] = useState('')
    const onChange = (e) => {
        setUserInput(e.target.value);
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
            handleSubmit(e)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask(userInput)
        setUserInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={userInput}
                    type='text'
                    placeholder={'Write todo'}
                    onChange={onChange}
                    onKeyDown={handleKeyPress}
                />
                <button>
                    Save
                </button>
            </form>
        </div>
    );
};

export default TodoForm;