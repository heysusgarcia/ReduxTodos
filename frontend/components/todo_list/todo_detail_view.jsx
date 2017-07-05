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
      <div className={klass}>
        <p className="todo-body">{ todo.body }</p>
        <button
         className="delete-button"
         onClick={this.handleDelete}> Delete Todo</button>
        <StepListContainer todo_id={ todo.id } />
      </div>
    )
  }
};

export default TodoDetailView;
