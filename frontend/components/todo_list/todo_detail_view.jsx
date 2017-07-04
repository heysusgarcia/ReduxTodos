import React from 'React';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(todo) {
    this.props.removeTodo(this.props.todo);
  }

  render() {
    const todo = this.props.todo;
    return (
      <div className="todo-detail-view">
        {todo.body}
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default TodoDetailView;
