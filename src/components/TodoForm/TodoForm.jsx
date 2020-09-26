import React from "react";
import c from "./TodoForm.module.css";

const TodoForm = (props) => {
    let sendNewTodo = (e) => {
        e.preventDefault();
        let value = e.currentTarget[0].value;
        if(!value) {
            return;
        }
        e.currentTarget[0].value = "";
        props.addNewTodo(value);
    }
    return(
        <form className={c.form} onSubmit={sendNewTodo}>
            <textarea className={c.form__textarea} />
            <button className={c.form__button}>
                Add new Todo
            </button>
        </form>
    );
}

export default TodoForm;