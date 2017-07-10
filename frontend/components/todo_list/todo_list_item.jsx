import React from 'React';
import TodoDetailViewContainer from './todo_detail_view_container';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { detail: false };
    this.toggleDetailView = this.toggleDetailView.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone(e) {
    e.preventDefault();
    const done = { done : !this.props.todo.done };
    const updatedTodo = merge({}, this.props.todo, done);
    this.props.updateTodo(updatedTodo);
  }

  toggleDetailView(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  render() {
    const { todo, updateTodo} = this.props;
    let detail;
    if (this.state.detail) {
      detail = <TodoDetailViewContainer todo={todo}/>;
    }

    return (
      <li className='todo-list-item'>
       <span
        className="todo-header">
        <h3
         className="title">
         <a onClick={this.toggleDetailView}>{todo.title}</a>
        </h3>
        <button
         className={ todo.done ? "done" : "undone" }
         onClick={this.toggleDone}>
         {todo.done ? "Undo" : "Done"}
        </button>
    </span>
      {detail}
      </li>
    )
}
};

export default TodoListItem;
