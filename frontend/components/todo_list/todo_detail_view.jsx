import React from 'React';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  componentDidMount() {
    this.props.fetchSteps();
  }

  render() {
    const { todo, deleteTodo } = this.props;

    return (
      <span className="todo-body">
        <h5>{ todo.body }</h5>
        <StepListContainer todo_id={ todo.id } />
        <span className="todo-delete-button-view">
          <button className="delete-button" onClick={deleteTodo}>
            Delete Todo
          </button>
        </span>
     </span>
    )
  }
};

export default TodoDetailView;
