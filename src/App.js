import React from 'react';
import './App.css';
import TodoListContainer from "./components/TodoList/TodoListContainer";
import TodoFormContainer from "./components/TodoForm/TodoFormContainer";

let App = (props) => {
    return (
        <div className="App">
            <div className="app__top">ToDo List</div>
            <div className="app__window">
                <TodoFormContainer />
                <TodoListContainer/>
            </div>
        </div>
    );
}

export default App;
