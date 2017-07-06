import React from 'React';
import TodoDetailView from './todo_detail_view';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { detail: false };

    this.toggleDone = this.toggleDone.bind(this);
    this.toggleDetailView = this.toggleDetailView.bind(this);
  }

  toggleDone(e) {
    e.preventDefault();
    const done = { done : !this.props.todo.done };
    const updatedTodo = merge({}, this.props.todo, done);
    this.props.receiveTodo(updatedTodo);
  }

  toggleDetailView(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  render() {
    const { todo, receiveTodo, removeTodo } = this.props;

    return (
      <li className='todo-list-item'>
       <span
        className="todo-header">
        <h3
         onClick={this.toggleDetailView}
         className="title">
         {todo.title}
        </h3>
      <button
       className={ todo.done ? "done" : "undone" }
       onClick={this.toggleDone}>{todo.done ? "Undo" : "Done"}
      </button>
    </span>

        <TodoDetailView
          todo={todo}
          removeTodo={removeTodo}
          detail={this.state.detail}/>
      </li>
    )
}
};

export default TodoListItem;
