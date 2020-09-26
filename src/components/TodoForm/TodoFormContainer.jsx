import React from "react";
import TodoForm from "./TodoForm";
import {connect} from "react-redux";
import {addNewTodo} from "../../Redux/todo-reducer";

class TodoFormContainer extends React.Component {
    render() {
        return(
            <TodoForm {...this.props} />
        );
    }
}

export default connect(null, {addNewTodo})(TodoFormContainer);