import React from 'React';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(todo) {
    this.props.removeTodo(this.props.todo);
  }

  render() {
    const todo = this.props.todo
    return (
      <li>
       {todo.title}
       <button onClick={this.handleClick}>Delete</button>
      </li>
    )
}
};

export default TodoListItem;
