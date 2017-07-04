import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeStep(this.props.step);

  }

  render() {
    debugger;
    const step = this.props;
    return (
      <li className="step-header">
        <p className="step-title"> { step.title } </p>
        <p className="step-body"> { step.body } </p>

        <div>
          <button
           className={ step.done ? "done" : "undone" }>
           { step.done? "Undo" : "Done" }
          </button>

          <button
           className="delete-button"
           onClick={this.handleDelete}>
           Delete
           </button>
        </div>
      </li>
    )
  }
};

export default StepListItem;
