import React from 'React';
import TodoDetailView from './todo_detail_view';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.toggleDone = this.toggleDone.bind(this);
  }

  handleDelete(todo) {
    this.props.removeTodo(this.props.todo);
  }

  toggleDone(e) {
    e.preventDefault();
    const done = { done : !this.props.todo.done };
    const updatedTodo = merge({}, this.props.todo, done);
    this.props.receiveTodo(updatedTodo);

  }

  render() {
    const { todo, receiveTodo, removeTodo } = this.props;

    return (
      <li>
       {todo.title}
       <button
        className={ todo.done ? "done" : "undone" }
        onClick={this.toggleDone}>{todo.done ? "Undo" : "Done"}</button>

        <TodoDetailView
          todo={todo}
          removeTodo={removeTodo}/>
      </li>
    )
}
};

export default TodoListItem;
