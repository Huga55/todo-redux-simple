import React from "react";

let CHANGE_STATUS_TASK = "CHANGE_STATUS_TASK";
let DELETE_TODO = "DELETE_TODO";
let ADD_NEW_TODO = "ADD_NEW_TODO";

let initialState = {
    tasks: [
        {id: 1, text: "new text", status: false},
        {id: 2, text: "new text 2", status: false},
        {id: 3, text: "new text 3", status: false},
    ],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS_TASK:
            return {
                ...state,
                tasks: state.tasks.map(t =>{
                    if(t.id === action.id) {
                        t.status = !t.status;
                    }
                    return t;
                }),
            }
        case DELETE_TODO:
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.id),
            }
        case ADD_NEW_TODO:
            let nextId = state.tasks[state.tasks.length - 1].id + 1;
            return {
                ...state,
                tasks: [...state.tasks, {id:nextId, text: action.text, status: false}],
            }
        default:
            return state;
        }
}

export let changeStatusTask = (id) => ({type: CHANGE_STATUS_TASK, id});
export let deleteTodo = (id) => ({type: DELETE_TODO, id});
export let addNewTodo = (text) => ({type: ADD_NEW_TODO, text});

export default todoReducer;