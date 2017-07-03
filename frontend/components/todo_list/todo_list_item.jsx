import React from 'React';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
       {this.props.todo.title}
      </li>
    )
}
};

export default TodoListItem;
