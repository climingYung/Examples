import React from 'react';
import './TodoListTemplate.css'

const TodoListTemplte = ({form, children}) => {
    return(
        <main className="todo-list-template">
            <div className='title'>
            </div>
                오늘 할 일
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todo-list-wrapper">
                { children }
            </section>
        </main>
    )
}

export default TodoListTemplte;