import React from 'React';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
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
      <span className={klass}>
        <span className="todo-body">
          <h5>{ todo.body }</h5>
          <button
           className="delete-button"
           onClick={this.handleDelete}> Delete Todo</button>
       </span>
        <StepListContainer todo_id={ todo.id } />
       </span>
    )
  }
};

export default TodoDetailView;
