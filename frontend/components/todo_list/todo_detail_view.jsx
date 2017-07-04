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
    const { todo, detail } = this.props;
    let klass = '';

    if (detail) {
      klass = ' is-active';
    }
    klass = `todo-detail-view${klass}`;

    return (
      <div className={klass}>
        {todo.body}
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
};

export default TodoDetailView;
