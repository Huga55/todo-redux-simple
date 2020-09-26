import React from "react";
import {connect} from "react-redux";
import TodoList from "./TodoList";
import {changeStatusTask, deleteTodo} from "../../Redux/todo-reducer";

class TodoListContainer extends React.Component {
    render() {
        return(
            <TodoList {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return({
        tasks: state.todo.tasks,
    });
}

export default connect(mapStateToProps, {changeStatusTask, deleteTodo})(TodoListContainer);