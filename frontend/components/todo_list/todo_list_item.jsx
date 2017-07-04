import React from 'React';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleDelete(todo) {
    this.props.removeTodo(this.props.todo);
  }

  handleDone(todo) {

  }

  render() {
    const { todo, receiveTodo, removeTodo } = this.props;
    return (
      <li>
       {todo.title}
       <button onClick={this.handleDone}>{todo.done ? "Done" : "Undone"}</button>
       <button onClick={this.handleDelete}>Delete</button>
      </li>
    )
}
};

export default TodoListItem;
