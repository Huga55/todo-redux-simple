import React from "react";
import c from "./TodoList.module.css";

const TodoList = (props) => {
    return(
        <ul className={c.list}>
            {
                props.tasks.map(elem => <li className={!elem.status? c.list__elem : `${c.list__elem} ${c.list__elem_active}`} key={elem.id} id={elem.id}>
                    <span className={c.list__text}>{elem.text}</span>
                    <span className={c.list__action}>
                        <input type="checkbox" className={c.list__complet} onChange={() => props.changeStatusTask(elem.id)} checked={elem.status}/>
                        <span onClick={() => props.deleteTodo(elem.id)} className={c.list__delete}></span>
                    </span>
                </li>)
            }
        </ul>
    );
}

export default TodoList;