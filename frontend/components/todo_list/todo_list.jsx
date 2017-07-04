import React from 'React';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
       key={`todo-list-item${todo.id}`}
       todo={todo}
       receiveTodo={ receiveTodo }
       removeTodo={ removeTodo }/>
    )
  );

  return (
    <div>
      <ul className="todo-list-view">
        { todoItems }
      </ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </div>
  )}
};

export default TodoList;
