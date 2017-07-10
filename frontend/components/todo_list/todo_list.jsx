import React from 'React';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, createTodo, removeTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
       key={`todo-list-item${todo.id}`}
       todo={todo}
       receiveTodo={ receiveTodo }
       removeTodo={ removeTodo }/>
    )
  );

  return (
    <span>
      <h1>Redux Todo App</h1>
      <span className="todo-list-view">
        <ul className="todo-list-item-view">
          { todoItems }
        </ul>
        <span className="todo-form">
          <TodoForm createTodo={createTodo}/>
        </span>
      </span>
    </span>
  )}
};

export default TodoList;
